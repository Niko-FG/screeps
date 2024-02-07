var roleBanyunchenjie = require('role.banyunchenjie');
var roleZhandouchenjie = require('role.zhandouchenjie');
const maxcreeps = 10;

module.exports.loop = function () {  

    let chenjiecount = Object.keys(Game.creeps).length
  
    //Game.creeps['zhandouchenjie'].memory.role = 'zhandouchenjie';
    //这行是给组里的元素分配内存去调用role

    let creepswithzhandou = Object.keys(Game.creeps).filter(key => key.includes('zhandou'));
    creepswithzhandou.forEach(creepName => {
        Game.creeps[creepName].memory.role = 'zhandouchenjie';
    });
    //用Object.key把数组中的元素都取出来然后用filter筛选出含有zhandou的，forEach是将元素遍历，然后扔进下面那行
    let creepswithbanyun = Object.keys(Game.creeps).filter(key => key.includes('banyun'));
    creepswithbanyun.forEach(creepName => {
        Game.creeps[creepName].memory.role = 'banyunchenjie';
    });

    for(let name in Game.creeps) {  
        let creep = Game.creeps[name];
        if(creep.memory.role == 'zhandouchenjie') {
            roleZhandouchenjie.run(creep);  
        }
        if(creep.memory.role == 'banyunchenjie') {
            roleBanyunchenjie.run(creep);  
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
        if (chenjiecount %2 === 0) {
            chenjie = 'banyunchenjie'+ year + month + day + hour + minute + second;
        } else {
            chenjie = 'zhandouchenjie' + year + month + day + hour + minute + second;
        }
        return chenjie;
        }

    if (chenjiecount >= maxcreeps) {  
        return;  
    }  
        if (chenjiecount < maxcreeps && chenjiecount %2 === 1) {
            console.log(Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, CARRY, CARRY, MOVE], chenjie ));
        } else (chenjiecount < maxcreeps); {
            console.log(Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE, MOVE, MOVE], chenjie ));
        }
    
}

const targets = Game.spawns['Spawn1'].room.find(FIND_MY_SPAWNS)