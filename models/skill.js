const skills = [
    {id: 156798, skill: 'HTML', level: 'Proficient', project: 'SEI Project 1 - Blackjack'},
    {id: 147589, skill: 'CSS', level: 'Proficient', project: 'SEI Project 1 - Blackjack'},
    {id: 123468, skill: 'JavaScript', level: 'Competent', project: 'SEI Project 1 - Blackjack'}
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

  function getOne(skillId) {
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(s => s.id === parseInt(skillId));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function deleteOne(skillId) {
    const idx = skills.findIndex(s => s.id === parseInt(skillId));
    skills.splice(idx, 1);
  }

  function update(skillId, updatedSkill) {
    const skill = skills.find((s) => s.id === parseInt(skillId));
    // Merge the updatedTodo's properties into the
    // existing todo object's property
    Object.assign(skill, updatedSkill);
};