import {List,Map} from 'immutable';
import {expect} from 'chai';

import {setProjects} from '../src/core';

describe('Application logic', ()=>{

  describe('set Projects', ()=>{

    it('Adds new projects to the state',()=>{

      const state = Map()
      const projects = List.of('Project 1', 'Project 2');
      const nextState = setProjects(state,projects);
      

    })

  })

})
