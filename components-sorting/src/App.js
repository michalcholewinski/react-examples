import React, {Component} from 'react';
import './App.css';
import {SortableSectionsContainer} from "./sortable-sections/SortableSectionsContainer";
import {RedSection} from "./sections/RedSection";
import {BlueSection} from "./sections/BlueSection";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Example of Sections Sorting
                    <SortableSectionsContainer sortable='ASC'>
                        <RedSection key='Three' title='Three' order={3}/>
                        <RedSection key='One' title='One' order={1}/>
                        <BlueSection key='Two' title='Two' order={2}/>
                        <RedSection key='Six' title='Six' order={6}/>
                        <BlueSection key='Seven' title='Seven' order={7}/>
                        <RedSection key='Four' title='Four' order={4}/>
                        <RedSection key='Eight' title='Eight' order={8} />
                        <BlueSection key='Nine' title='Nine' order={9}/>
                        <RedSection key='Five' title='Five' order={5}/>
                    </SortableSectionsContainer>
                </header>
            </div>
        );
    }
}

export default App;
