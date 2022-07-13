const timeTransfrom=time=>{
  const year = new Date(time).toLocaleDateString("en-US", {year:'numeric'});
  const month = new Date(time).toLocaleDateString("en-US", {month:'long'});
  const day = new Date(time).toLocaleDateString("en-US", { day: "numeric" });
  const weekday = new Date(time).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return {year, month, day ,weekday}
}

export {timeTransfrom}