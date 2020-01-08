// Componente lógico
import React from 'react';
import { connect } from 'react-redux';
import SkillsView from '../components/Skills/Skills';

function Skills ({skills}) {
  return <SkillsView data={skills}/>
}

const mapStateToProps = (state)=> {
  return { skills: state.skills }
}

export default connect(mapStateToProps, {})(Skills);