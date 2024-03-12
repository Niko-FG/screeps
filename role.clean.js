var roleClean = {
    removeDeadCreep : function(){
        for(let i in Memory.creeps) {
            if(!Game.creeps[i]) {
                delete Memory.creeps[i];
            }
        }
    }
}


module.exports = roleClean;