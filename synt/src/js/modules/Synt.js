function PitchShifter() { 
  this._pitchShift = 0; 
  var oscillators = {}; 

  Object.defineProperty(this, "pitchShift", { 
    set: function (ps) { 
      this._pitchShift = ps; 
      for(var pitch in oscillators) { 
        oscillators[pitch].frequency.value = 
          oscillators[pitch].baseFrequency * Math.pow(2, this._pitchShift/1200); 
      } 
    }, 
    get: function() { 
      return this._pitchShift; 
    } 
  }); 

  var old = { 
    play: this.play, 
    stop: this.stop 
  }; 

  this.play = function(note) { 
    var osc = oscillators[note.pitch] = old.play.call(this, note); 
    osc.baseFrequency = note.frequency; 
    osc.frequency.value = osc.baseFrequency * Math.pow(2, this._pitchShift/1200); 
    return osc; 
  }; 

  this.stop = function(note) { 
    delete oscillators[note.pitch]; 
    old.stop.apply(this, arguments); 
  }; 
}

function SineModulator (options) {
  options = options || {};
  this._frequency = options.frequency || 0;
  this._phaseOffset = 0;
  this._startedAt = 0;
  this._interval = null;
  this._prevValue = 0;
  this.depth = options.depth || 0;

  Object.defineProperty(this, "frequency", { 
    set: function (frequency) {
      frequency = parseFloat(frequency);
      this._phaseOffset = this._phaseNow();
      this._startedAt = Date.now();
      this._frequency = frequency;
    },
    get: function() {
      return this._frequency;
    }
  });
}

SineModulator.prototype.modulate = function(object, property) {
  this._objToModulate = object;
  this._propertyToModulate = property;
};

SineModulator.prototype.start = function() {
  this._startedAt = Date.now();
  var this_ = this;
  this._interval = setInterval(function() {
    var value = this_._modValueNow();
    var diff = value - this_._prevValue;
    this_._objToModulate[this_._propertyToModulate] += diff;
    this_._prevValue = value;
  }, 10);
};

SineModulator.prototype._phaseNow = function() {
  var timeDiff = (Date.now() - this._startedAt) / 1000;
  var phase = this._phaseOffset + timeDiff * this.frequency % 1;
  return phase;
};

SineModulator.prototype._modValueNow = function() {
  var phase = this._phaseNow();
  return Math.sin((phase) * 2 * Math.PI) * this.depth;
};

SineModulator.prototype.stop = function() {
  clearInterval(this._interval);
}


class SYNT {
  constructor() {
    this.syntName = 'acidsynt2001';
    this.audioContext = new AudioContext(); 
    this.waveTypeIndex = 0;
    
    this.output = this.audioContext.createGain(); 
    this.volume = this.audioContext.createGain();
    this.volume.gain = 1;
    this.output.connect(this.volume);

    this._oscillators = {}; 

    this.volume.connect(this.audioContext.destination);
  }

  playWave() {
    if (Synt._oscillators['note']) {
      Synt._oscillators['note'].stop(0);
    }
    const oscillator = Synt._oscillators['note'] = Synt.audioContext.createOscillator(); 
    oscillator.frequency.value = 100;
    oscillator.detune.value = 100;
    oscillator.connect(Synt.output); 
    oscillator.start(0);
    
    Synt.vibrato = new SineModulator();
    Synt.vibrato.modulate(Synt, 'pitchShift');
    Synt.vibrato.frequency = 5;
    Synt.vibrato.depth = 50;
    Synt.vibrato.start();

    Synt.tremolo = new SineModulator();
    Synt.tremolo.modulate(Synt.volume.gain, 'value');
    Synt.tremolo.frequency = 1;
    Synt.tremolo.depth = 0.2;
    Synt.tremolo.start()
    return oscillator;
  }

  stopWave() {
    Synt._oscillators['note'].stop(0); 
  }

  changeFrequency(direction) {
    const oscillator = Synt._oscillators['note'];
    if (oscillator) {
      const moveValue = 50;

      if (direction === 'plus') {
        oscillator.frequency.value += moveValue;
      } else if (direction === 'min') {
        oscillator.frequency.value -= moveValue;
      }
      console.log(oscillator);
      return oscillator;
    }
  }

  changeDetune(direction) {
    const oscillator = Synt._oscillators['note'];
    if (oscillator) {
      const moveValue = 200;

      if (direction === 'plus') {
        oscillator.detune.value += moveValue;
      } else if (direction === 'min') {
        oscillator.detune.value -= moveValue;
      }
      console.log(oscillator);
      return oscillator;
    }
  }

  changeWaveType(direction) {
    const oscillator = Synt._oscillators['note'];
    const waveTypes = ['sine', 'square', 'sawtooth'];
    if (oscillator) {
      if (direction === 'plus') {
        Synt.waveTypeIndex = Synt.waveTypeIndex === waveTypes.length - 1 ? 0 : Synt.waveTypeIndex + 1;
      } else if (direction === 'min') {
        Synt.waveTypeIndex = Synt.waveTypeIndex === 0 ? waveTypes.length - 1 : Synt.waveTypeIndex - 1;
      }
      console.log(Synt.waveTypeIndex, waveTypes[Synt.waveTypeIndex]);
      oscillator.type = waveTypes[Synt.waveTypeIndex];
    }
  }

  changeVolume(direction) {
    if (direction === 'plus') {
      Synt.volume.gain.value += .1;
    } else if (direction === 'min') {
      Synt.volume.gain.value -= .1;
    }
  }

  changeTremoloFrequency(direction) {
    const tremolo = Synt.tremolo;
    if (tremolo) {
      if (direction === 'plus') {
        tremolo.frequency += 1;
      } else if (direction === 'min') {
        tremolo.frequency -= 1;
      }
    }
  }

  changeTremoloDepth(direction) {
    const tremolo = Synt.tremolo;
    if (tremolo) {
      if (direction === 'plus') {
        tremolo.frequency += 1 / 10;
      } else if (direction === 'min') {
        tremolo.frequency -= 1 / 10;
      }
    }
  }

  changeVibratoFrequency(direction) {
    const vibrato = Synt.vibrato;
    if (vibrato) {
      if (direction === 'plus') {
        vibrato.frequency += 1;
      } else if (direction === 'min') {
        vibrato.frequency -= 1;
      }
    }
    console.log(vibrato);
  }

  changeVibratoDepth(direction) {
    const vibrato = Synt.vibrato;
    if (vibrato) {
      if (direction === 'plus') {
        vibrato.frequency += 10;
      } else if (direction === 'min') {
        vibrato.frequency -= 10;
      }
    }
    console.log(vibrato);
  }
}

const Synt = new SYNT();

module.exports = Synt;