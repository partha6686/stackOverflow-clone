export const numberService = (num, precision = 1)=>{
    const map = [
        {suffix: 'B', threshold: 1e9},
        {suffix: 'M', threshold: 1e6},
        {suffix: 'K', threshold: 1e3},
        {suffix: '', threshold: 1},
      ];
    
      const found = map.find(x => Math.abs(num) >= x.threshold);
      if (found) {
        const formatted = (num / found.threshold).toFixed(found.suffix == ''?0:precision) + found.suffix;
        return formatted;
      }
    
      return num;
}