import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel({ plantsArray, setPlantsArray, onClose }) {
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    description: '',
    cost: '',
    category: 'Air Purifying Plants'
  });

  const [showAddForm, setShowAddForm] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add new plant
  const handleAddPlant = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!newPlant.name || !newPlant.image || !newPlant.description || !newPlant.cost) {
      alert('Please fill in all fields!');
      return;
    }

    // Find the category in plantsArray
    const updatedPlantsArray = plantsArray.map(categoryObj => {
      if (categoryObj.category === newPlant.category) {
        return {
          ...categoryObj,
          plants: [...categoryObj.plants, {
            name: newPlant.name,
            image: newPlant.image,
            description: newPlant.description,
            cost: newPlant.cost.startsWith('$') ? newPlant.cost : `$${newPlant.cost}`
          }]
        };
      }
      return categoryObj;
    });

    setPlantsArray(updatedPlantsArray);

    // Reset form
    setNewPlant({
      name: '',
      image: '',
      description: '',
      cost: '',
      category: 'Air Purifying Plants'
    });

    setShowAddForm(false);
    alert('Plant added successfully!');
  };

  // Delete plant
  const handleDeletePlant = (categoryName, plantName) => {
    if (window.confirm(`Are you sure you want to delete "${plantName}"?`)) {
      const updatedPlantsArray = plantsArray.map(categoryObj => {
        if (categoryObj.category === categoryName) {
          return {
            ...categoryObj,
            plants: categoryObj.plants.filter(plant => plant.name !== plantName)
          };
        }
        return categoryObj;
      });

      setPlantsArray(updatedPlantsArray);
      alert('Plant deleted successfully!');
    }
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Admin Panel - Manage Products</h1>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>

      <div className="admin-actions">
        <button
          className="add-product-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : 'Add New Plant'}
        </button>
      </div>

      {/* Add Plant Form */}
      {showAddForm && (
        <div className="add-plant-form">
          <h2>Add New Plant</h2>
          <form onSubmit={handleAddPlant}>
            <div className="form-group">
              <label>Category:</label>
              <select
                name="category"
                value={newPlant.category}
                onChange={handleInputChange}
              >
                {plantsArray.map((cat, idx) => (
                  <option key={idx} value={cat.category}>
                    {cat.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Plant Name:</label>
              <input
                type="text"
                name="name"
                value={newPlant.name}
                onChange={handleInputChange}
                placeholder="e.g., Monstera Deliciosa"
                required
              />
            </div>

            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                name="image"
                value={newPlant.image}
                onChange={handleInputChange}
                placeholder="https://..."
                required
              />
              {newPlant.image && (
                <img
                  src={newPlant.image}
                  alt="Preview"
                  className="image-preview"
                  onError={(e) => e.target.style.display = 'none'}
                />
              )}
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="description"
                value={newPlant.description}
                onChange={handleInputChange}
                placeholder="Describe the plant..."
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label>Cost:</label>
              <input
                type="text"
                name="cost"
                value={newPlant.cost}
                onChange={handleInputChange}
                placeholder="15 ($ will be added automatically)"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              ✓ Add Plant
            </button>
          </form>
        </div>
      )}

      {/* Plant List */}
      <div className="plants-list">
        <h2>All Plants ({plantsArray.reduce((sum, cat) => sum + cat.plants.length, 0)})</h2>

        {plantsArray.map((category, catIndex) => (
          <div key={catIndex} className="category-section">
            <h3>{category.category} ({category.plants.length})</h3>

            <div className="plants-grid">
              {category.plants.map((plant, plantIndex) => (
                <div key={plantIndex} className="plant-item">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h4>{plant.name}</h4>
                    <p>{plant.description}</p>
                    <span className="plant-cost">{plant.cost}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeletePlant(category.category, plant.name)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
