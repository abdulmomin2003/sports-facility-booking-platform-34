
  // Filter facilities based on search, category, and status
  const filterFacilities = (facilities: Facility[]) => {
    return facilities.filter((facility) => {
      const matchesSearch =
        facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facility.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || selectedCategory === "all_categories" || facility.category === selectedCategory;
      const matchesStatus = !selectedStatus || selectedStatus === "all_statuses" || facility.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  };
