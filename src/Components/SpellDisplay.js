import React, { useState } from 'react';
import StatLine from './StatLine'
import spells from '../Data/Spells_v1_trimmed'

import '../statblock.css';

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
    const dancingLights = spells.find(x => x.name === 'Dancing Lights');
    const [spell, setSpell] = useState(dancingLights);
    const [lookupInput, setLookupInput] = useState('');

    return (
    <section className="statblock">
        <input onChange={(e) => setLookupInput(e.target.value)}/><button onClick={(e) => lookupSpell(lookupInput, setSpell)}>Find Spell</button>
        <header className="sectionHeader">{spell.name}</header>
        <StatLine header="School" section={spell.school} inline/>{spellDescriptor(spell.descriptor)}&nbsp;
        <StatLine header="Level" section={spell.spell_level} inline/>
        <StatLine header="Casting Time" section={spell.casting_time}/>
        <StatLine header="Components" section={spell.components}/>
        <StatLine header="Range" section={spell.range}/>
        <StatLine header="Target" section={spell.target}/>
        <StatLine header="Effect" section={spell.effect}/>
        <StatLine header="Area" section={spell.area}/>
        <StatLine header="Duration" section={spell.duration} inline/>&nbsp;<span>{dismissable(spell.duration, spell.dismissible)}</span>
        <div>
            <StatLine header="Saving Throw" section={spell.saving_throw} inline/>
            <StatLine header="Spell Resistance" section={spell.spell_resistence} inline prefix=";&nbsp;"/>
        </div>
        <div><span dangerouslySetInnerHTML={{__html: spell.description_formated}}></span></div>
    </section>
    );
};
export default SpellDisplay;