import './App.css';
import DefaultProp from './Components/DefaultProp'
import ArrayProps from './Components/ArrayAsProps'
import FunctionalProp from './Components/PersonBasicDetails_FunctionComponent'
import ParentSampleRenderProps from './Components/RenderPropDemo'
// import PersonCompany from './Components/RenderPropAdvanceDemoWithStateAndSubChild'
// import GrandParent from './Components/Live';
function App() {
  return (
    <>
      {/* Default Prop */}
      <div >
        <DefaultProp name="Kahan" gender="Male"></DefaultProp>
        <DefaultProp name="Shadow" gender="Male"></DefaultProp>
        <DefaultProp name="CyberWarrior" gender="Male"></DefaultProp>
      </div>
      <hr/>
      {/* Array as Props */}
      <ArrayProps></ArrayProps>
      <hr/>
      <hr/>
      {/* Functional Component Prop */}
      <div>
        <FunctionalProp></FunctionalProp>
      </div> 
      <hr/>
      <hr/> 
      {/* Render Props */}
      <ParentSampleRenderProps/>
      {/* <hr/>
      <hr/> */}
      {/* Render Props */}
      {/* <PersonCompany/>
      <hr/>
      <hr/>
      <GrandParent/> */}
    </>
  );
}

export default App;
