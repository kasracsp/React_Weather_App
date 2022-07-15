const timeTransfrom=time=>{
  const year = new Date(time).toLocaleDateString("en-US", {year:'numeric'});
  const month = new Date(time).toLocaleDateString("en-US", {month:'long'});
  const day = new Date(time).toLocaleDateString("en-US", { day: "numeric" });
  const weekday = new Date(time).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return {year, month, day ,weekday}
}

const getSuggestions = (state, key) => {
  if (key.trim().length > 0) {
    const suggestions = state.filter((item) =>
      item.toLowerCase().includes(key.trim().toLowerCase())
    );
    return suggestions;
  }
  return [];
};

export { timeTransfrom, getSuggestions };