//var roleUpgrader = {

    /** @param {Creep} creep **/
/*    run: function(creep) {
        
        // state switch
        if(creep.store[RESOURCE_ENERGY] == 0 && creep.memory.upgrading) {
            creep.memory.upgrading = false;
            creep.memory.harvesting = true;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.memory.harvesting = false;
            creep.say('upgrade');
        }
        // if have container, draw energy from container
        // else, draw from source
        if(creep.memory.upgrading){
          if(creep.room.name != creep.memory.home){
            fromTo.toRoom(creep, creep.memory.home)
            return;
          }

            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller,{visualizePathStyle: {stroke: '#FF0040'}});
            }
        }else {
            if(!fromTo.withdrawFromContainer(creep)){
                fromTo.harvestFromSource(creep)
            }
        }

	}
};

module.exports = roleUpgrader;
*/
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
      if(creep.store[RESOURCE_ENERGY] == 0) {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
        }
      }
      else {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
        }
      }
    }
  };
  
  module.exports = roleUpgrader;