import React, { useState } from 'react';
import StatLine from './StatLine'
import spells from '../Data/Spells_v1_trimmed'

import '../statblock.css';
import './CustomCss/selectCss.css'

const spellDescriptor = (descriptor) => {
    const baseDescriptor =  descriptor ? `[${descriptor}]` : '';
    if (baseDescriptor) {
        return (
            <React.Fragment>
                &nbsp;<span>{baseDescriptor}</span>;&nbsp;
            </React.Fragment>
        )
    }
}

const dismissable = (duration, dismissable) => {
    return (dismissable && duration.indexOf("(D)") === -1) ? `(D)` : '';
}

const lookupSpell = (spellName, stateSetter) => {
    console.log(spellName)
    console.log(`Lookup spell ${spellName}`);
    const found = spells.find(x => x.name.toLowerCase() === spellName.toLowerCase());
    if (found) stateSetter(found);
}

const SpellDisplay = (props) => {
    const firstSpell = spells[0];
    const [spell, setSpell] = useState(firstSpell);

    return (
    <section className="statblock">
        <select className="select-css" onChange={(e) => lookupSpell(e.target.value, setSpell)} >
            {spells.map(x => x.name).sort().map(x => <option>{x}</option>)}
        </select>
        <header className="sectionHeader">{spell.name}</header>
        <div>
            <StatLine header="School" section={spell.school}/>{spellDescriptor(spell.descriptor)}&nbsp;
            <StatLine header="Level" section={spell.spell_level}/>
        </div>
        <div><StatLine header="Casting Time" section={spell.casting_time}/></div>
        <div><StatLine header="Components" section={spell.components}/></div>
        <div><StatLine header="Range" section={spell.range}/></div>
        <div><StatLine header="Target" section={spell.target}/></div>
        <div><StatLine header="Effect" section={spell.effect}/></div>
        <div><StatLine header="Area" section={spell.area}/></div>
        <div><StatLine header="Duration" section={spell.duration}/>&nbsp;<span>{dismissable(spell.duration, spell.dismissible)}</span></div>
        <div>
            <StatLine header="Saving Throw" section={spell.saving_throw}/>
            <StatLine header="Spell Resistance" section={spell.spell_resistence} prefix=";&nbsp;"/>
        </div>
        <div><span dangerouslySetInnerHTML={{__html: spell.description_formated}}></span></div>
    </section>
    );
};
export default SpellDisplay;