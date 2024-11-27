import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import "./App.css";
import { fetchSessionID } from "./fetchers/getSessionID";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const sessionID = localStorage.getItem("sessionId");
  useEffect(() => {
    if (!sessionID) {
      fetchSessionID();
    }
  }, [sessionID]);
  

  const [data, setData] = useState({ uploads: [] });
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [likedItems, setLikedItems] = useState([]); 
  const apiUrl = process.env.REACT_APP_API_URL;
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    companies: [],
    days: [],
    dates: [],
    seasons: [],
    favorites: false,
  });
  const [searchTerms, setSearchTerms] = useState([]);

  // Fetch data on component mount or when refreshKey changes
  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId") || "initial"; // Get sessionId
    axios
      .get(`${apiUrl}/data`, { params: { sessionId } }) // Send sessionId as a query parameter
      .then((response) => {
        setData(response.data);
        updateAllTags(response.data.uploads);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl, refreshKey]);
  

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (filterName, selectedValues) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedValues,
    }));
  };

  const handleTagSelection = (selectedTags) => {
    setSelectedTags(selectedTags);
  };

  const handleToggleFavorite = (item) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.some((likedItem) => likedItem.id === item.id)) {
        return prevLikedItems.filter((likedItem) => likedItem.id !== item.id);
      } else {
        return [...prevLikedItems, item];
      }
    });
  };

  const handleCardUpdate = async (updatedItem) => {
    try {
      const response = await fetch(`${apiUrl}/update/${updatedItem.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedItem.object, id: updatedItem.id }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Get error data from response
        throw new Error(errorData.error || "Failed to update item"); // Use error message from response
      }
      setData((prevData) => ({
        ...prevData,
        uploads: prevData.uploads.map((item) =>
          item.id === updatedItem.id ? { ...item, ...updatedItem.object } : item
        ),
      }));

      // Return true if update is successful
      return true; 
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error(error.message); // Show toast with error message
      return false; // Return false if there was an error
    }
  };

  const handleSearchSubmit = (term) => {
    if (term && !searchTerms.includes(term)) {
      setSearchTerms((prev) => [...prev, term]);
    }
  };

  const handleRemoveSearchTerm = (term) => {
    setSearchTerms((prev) => prev.filter((t) => t !== term));
  };

  const filteredData = data.uploads.filter((item) => {
    // Split the search query into keywords based on commas and remove any empty strings
    const keywords = debouncedQuery.toLowerCase().split(",").map(keyword => keyword.trim()).filter(Boolean);
  
    // Check for favorite filter
    const matchesFavorites = selectedFilters.favorites ? item.favorite : true;
  
    // Check if the item matches the search query (across multiple fields) for each keyword
    const itemMatchesSearchQuery = keywords.every((keyword) => 
      // Check each field if the keyword is found (partial, case-insensitive match)
      item.title.toLowerCase().includes(keyword) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(keyword))) ||
      (item.category && item.category.toLowerCase().includes(keyword)) ||
      (item.company && item.company.toLowerCase().includes(keyword)) ||
      (item.day && item.day.toLowerCase().includes(keyword)) ||
      (item.date && item.date.toLowerCase().includes(keyword)) ||
      (item.season && item.season.toLowerCase().includes(keyword))
    );
  
    // Filter based on selected categories
    const matchesCategories =
      !selectedFilters.categories.length || selectedFilters.categories.includes(item.category);
  
    // Filter based on selected companies
    const matchesCompanies =
      !selectedFilters.companies.length || selectedFilters.companies.includes(item.company);
  
    // Filter based on selected days
    const matchesDays =
      !selectedFilters.days.length || selectedFilters.days.includes(item.day);
  
    // Filter based on selected dates
    const matchesDates =
      !selectedFilters.dates.length || selectedFilters.dates.includes(item.date);
  
    // Filter based on selected seasons
    const matchesSeasons =
      !selectedFilters.seasons.length || selectedFilters.seasons.includes(item.season);
  
    // Filter based on selected tags
    const matchesTags =
      selectedTags.length === 0 || (item.tags && selectedTags.every(tag => item.tags.includes(tag)));
  
    // Check if item matches any of the search terms
    const matchesSearchQuery = searchTerms.every((term) =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))) ||
      (item.category && item.category.toLowerCase().includes(term.toLowerCase())) ||
      (item.company && item.company.toLowerCase().includes(term.toLowerCase())) ||
      (item.day && item.day.toLowerCase().includes(term.toLowerCase())) ||
      (item.date && item.date.toLowerCase().includes(term.toLowerCase())) ||
      (item.season && item.season.toLowerCase().includes(term.toLowerCase()))
    );
  
    // Return the item if all conditions are matched
    return (
      matchesFavorites &&
      matchesSearchQuery &&
      matchesCategories &&
      matchesCompanies &&
      matchesDays &&
      matchesDates &&
      matchesSeasons &&
      matchesTags
    );
  });
  
  const updateAllTags = (uploads) => {
    const tags = [...new Set(uploads.flatMap(item => item.tags || []))].sort();
    setAllTags(tags);
  };

  // Add this function to toggle favorite filter
  const handleToggleFavoriteFilter = () => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      favorites: !prevFilters.favorites
    }));
  };
useEffect(()=>{      
  updateAllTags(data.uploads)

},[data])
  return (
    <>
      <ToastContainer />
      <Sidebar
        data={data.uploads}
        selectedFilters={selectedFilters}
        handleFilterChange={handleFilterChange}
        allTags={allTags}
        selectedTags={selectedTags}
        handleTagSelection={handleTagSelection}
      />
      <Navigation 
        query={query} 
        handleInputChange={handleInputChange} 
        onToggleFavoriteFilter={handleToggleFavoriteFilter}
        showFavorites={selectedFilters.favorites}
        onSearchSubmit={handleSearchSubmit}
        searchTerms={searchTerms}
        onRemoveSearchTerm={handleRemoveSearchTerm}
        allTags={allTags}
      />
      <Products
        result={filteredData.map((item) => (
          <Card 
            key={item.id} 
            {...item} 
            onUpdate={handleCardUpdate} 
            onToggleFavorite={() => handleToggleFavorite(item)} 
          />
        ))}
      />
    </>
  );
}

export default App;
