const skills = [
    {skill: 'HTML', level: 'Proficient', project: 'SEI Project 1 - Blackjack'},
    {skill: 'CSS', level: 'Proficient', project: 'SEI Project 1 - Blackjack'},
    {skill: 'JavaScript', level: 'Competent', project: 'SEI Project 1 - Blackjack'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(skill) {
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(s => s.skill === skill);
  }

  function create(skill) {
    skills.push(skill);
  }

  function deleteOne(skill) {
    const idx = skills.findIndex(s => s.skill === skill);
    skills.splice(idx, 1);
  }

  function update(skillId, updatedSkill) {
    const skill = skills.find((s) => s.skill === skillId);
    // Merge the updatedTodo's properties into the
    // existing todo object's property
    Object.assign(skill, updatedSkill);
};