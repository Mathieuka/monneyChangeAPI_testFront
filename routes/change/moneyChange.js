const calculChange = (amount) => {
  console.log(amount)
}

module.exports = (req, res) => {
   let { amount } = req.params
   calculChange(amount);
   res.send('rez')
    
};

