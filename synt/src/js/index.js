/* Main JS File */

/**
 * Load de main SASS file
 * You can also customize your application there
 */

import '../sass/main.scss';
import jQuery from 'jquery';
import Vue from 'vue/dist/vue.js';
import Synt from './modules/Synt.js';
/**
 * Now you'll be ready to develop your application
 * using bulma style.
 */
jQuery(document).ready(function($) {
  console.log('Your app is running...');

  const controllers = [{
      name: 'Frequency',
      state: 0,
      maxState: 8,
      event: Synt.changeFrequency,
      plusKey: {
        letter: 'w',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'q',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Detune',
      state: 0,
      maxState: 8,
      event: Synt.changeDetune,
      plusKey: {
        letter: 'r',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'e',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Tremolo Frequency',
      state: 0,
      maxState: 8,
      event: Synt.changeTremoloFrequency,
      plusKey: {
        letter: 'y',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 't',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Tremolo Depth',
      state: 0,
      maxState: 8,
      event: Synt.changeTremoloDepth,
      plusKey: {
        letter: 'i',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'u',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Vibrato Frequency',
      state: 0,
      maxState: 8,
      event: Synt.changeVibratoFrequency,
      plusKey: {
        letter: 's',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'a',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Vibrato Depth',
      state: 0,
      maxState: 8,
      event: Synt.changeVibratoDepth,
      plusKey: {
        letter: 'f',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'd',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Tone',
      state: 0,
      maxState: 8,
      event: 'tone',
      plusKey: {
        letter: 'h',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'g',
        direction: 'min',
        active: false
      }
    },
    {
      name: 'Tone',
      state: 0,
      maxState: 8,
      event: 'tone',
      plusKey: {
        letter: 'k',
        direction: 'plus',
        active: false
      },
      minusKey: {
        letter: 'j',
        direction: 'min',
        active: false
      }
    }
  ];

  const actions = [{
      name: 'Play',
      event: Synt.playWave,
      letter: 'p'
    },
    {
      name: 'Stop',
      event: Synt.stopWave,
      letter: 'o'
    },
    {
      name: 'Rec',
      event: 'StopRecord',
      letter: 'z'
    }
  ];

  const syntView = new Vue({
    el: '#synt',
    data: {
      syntName: 'asidsynt 2001',
      controllers,
      actions
    },
    mounted() {
      const that = this;
      let currentKeys = [];
      document.addEventListener('keydown', function(event) {
        that.controllers.forEach(controller => {
          if (controller.plusKey.letter === event.key) {
            currentKeys.push(controller.plusKey);
            controller.event(currentKey.direction);
          } else if (controller.minusKey.letter === event.key) {
            currentKeys.push(controller.minusKey);
            controller.event(currentKey.direction);
          }
          if (currentKeys.length > 0) {
            currentKeys.forEach(currentKey => {
              currentKey.active = true;
            });
          }
        });
        that.actions.forEach(action => {
          if (action.letter === event.key) {
            action.event();
          }
        });
      });

      document.addEventListener('keyup', function(event) {
        if (currentKeys.length > 0) {
          currentKeys.forEach(currentKey => {
            currentKey.active = true;
          });
          currentKeys = [];
        }
      });
    }
  });

});