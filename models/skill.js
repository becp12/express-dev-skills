const skills = [
    {skill: 'HTML', level: 'Proficient', project: 'Project 1 - Blackjack'},
    {skill: 'CSS', level: 'Proficient', project: 'Project 1 - Blackjack'},
    {skill: 'JavaScript', level: 'Competent', project: 'Project 1 - Blackjack'}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(skill) {
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(s => s.skill === skill);
  }