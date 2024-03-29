var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleClean = require('role.clean');
const maxcreeps = 20;

//立即执行函数生成10个harvester
(function har() {
    let sum = 10;
    for (let n = 1 ; n < sum; n++) {
        let intergrate = ('harvester' + n);
        Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE, MOVE], 'intergrate' );
        let creepswithintergrate = Object.keys(Game.creeps).filter(key => key.includes('intergrate'));
        creepswithintergrate.forEach(creepName => {
            Game.creeps[creepName].memory.role = 'harvester';
        });
    }
})()

//(function up() {
//    let sum = 10;
//    for (let n = 1 ; n < sum; n++) {
//        let intergrate = 'upgrader' + n;
//        Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, CARRY, MOVE, MOVE, MOVE], 'intergrate' );
//        Game.creeps['intergrate'].memory.role = 'upgrader';
//    }
//})()



module.exports.loop = function () {  

    let totalcreeps = Object.keys(Game.creeps).length
  
    //Game.creeps['zhandouchenjie'].memory.role = 'zhandouchenjie';
    //这行是给组里的元素分配内存去调用role

    //用Object.key把数组中的元素都取出来然后用filter筛选出含有zhandou的，forEach是将元素遍历，然后扔进下面那行
    let creepswithharvester = Object.keys(Game.creeps).filter(key => key.includes('harvester'));
    creepswithharvester.forEach(creepName => {
        Game.creeps[creepName].memory.role = 'harvester';
    });

    let creepswithbuilder = Object.keys(Game.creeps).filter(key => key.includes('builder'));
    creepswithbuilder.forEach(creepName => {
        Game.creeps[creepName].memory.role = 'builder';
    });

    for(let name in Game.creeps) {  
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);  
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);  
        }
    }


        getCurrentDateTime();  

    function getCurrentDateTime() {    
        let date = new Date();    
        let year = date.getFullYear();    
        let month = ("0" + (date.getMonth() + 1)).slice(-2);    
        let day = ("0" + date.getDate()).slice(-2);    
        let hour = ("0" + date.getHours()).slice(-2);    
        let minute = ("0" + date.getMinutes()).slice(-2);    
        let second = ("0" + date.getSeconds()).slice(-2);    
        if (totalcreeps %2 === 0) {
            otherscreep = 'builder'+ year + month + day + hour + minute + second;
        } else {
            otherscreep = 'harvester' + year + month + day + hour + minute + second;
        }
        return otherscreep;
        }

    if (totalcreeps >= maxcreeps) {  
        return;  
    }  
        if (totalcreeps < maxcreeps && totalcreeps %2 === 1) {
            Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, CARRY, CARRY, MOVE], otherscreep );
        } else (totalcreeps < maxcreeps); {
            Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE, MOVE, MOVE], otherscreep );
        }
    
}
Game.spawns.Spawn1.room.createConstructionSite(23,15,STRUCTURE_CONTAINER);
Game.spawns.Spawn1.room.createConstructionSite(23,16,STRUCTURE_CONTAINER);
Game.spawns.Spawn1.room.createConstructionSite(23,17,STRUCTURE_CONTAINER);
Game.spawns.Spawn1.room.createConstructionSite(23,18,STRUCTURE_CONTAINER);

for (let n = 0; n < 10000; n ++) {
    let m = Game.creeps.length;
    for (let b = 0; b < m; b++ ) {
        Game.creeps[b].say('1');
    }
}