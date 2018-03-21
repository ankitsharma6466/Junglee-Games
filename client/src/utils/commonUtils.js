const getFormattedAmount = (amt) => {
  
  let rupee = String.fromCharCode('0x20B9');
  
  if(amt)
    return `${rupee} ${amt}`;
  else
    return rupee;
};

export default { getFormattedAmount };