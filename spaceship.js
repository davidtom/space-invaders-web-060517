class Spaceship {

    constructor(name, crew, phasers, shields){
      this.name = name
      this.crew = crew
      this.crew.forEach((crewmember) => {
        crewmember.currentShip = this
      });
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      this.warpDrive = "disengaged"
      this.docked = this.isDocked()
      this.phasersCharge = "uncharged"
      
    }

    isDocked(){
      if(this.crew.length === 0){
        return true
      } else {
        return false
      };
    }
  };
