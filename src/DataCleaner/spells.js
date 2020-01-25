
import spells from '../Data/Spells_Original'

const notAClassProp = (key) => {
    const coreClassNames = ["sor", "wiz", "bard", "cleric", "druid", "paladin", "ranger", "adept"];
    const classPropNames = [
        "sor","wiz","bard","witch","magus","SLA_Level","shaman","psychic","medium","mesmerist","occultist","cleric","druid",
        "summoner","inquisitor","oracle","magus","adept","spiritualist","hunter","summoner_unchained","paladin","antipaladin","alchemist",
        "bloodrager"
    ];
    return !classPropNames.includes(key);
}

const convertBooleanKeys = (obj, key) => {
    const val = obj[key];
    if (key !== 'id' && notAClassProp(key) && (val === 0 || val === 1)) {
       if (val === 0) {
           delete obj[key]
       } else if (val === 1) {
           obj[key] = true;
       }
    }
}

const removeEmptyKeys = (obj, key) => {
    const val = obj[key];
    if (val === "NULL" || val === '') {
        delete obj[key];
    } 
}

const parseSpells = (spells) => {
    return spells.map(obj => {
        Object.keys(obj).forEach((key,index) => {
            removeEmptyKeys(obj, key);
            convertBooleanKeys(obj, key);
        });
        return obj;
    });
}

const processSpells = (writeStream) => {
    try {
        const updatedSpells = parseSpells(spells);
        //console.log(updatedSpells)
        writeStream.write(JSON.stringify(updatedSpells));
    } catch (ex) {
        //do something on write exception
    }
};

export default processSpells;
