import React from 'react';
import {Link} from 'react-router-dom'

const PathfinderDatabaseSplashScreen = () => {
    return (
        <section>
            <div>Welcome to the Pathfinder Database.</div>
            <div className="pfdb_spells_section">
                <div className="image_container">
                    <img className="pfdb_spellbook" src="images/spellbook.png" alt="spellbook"/>
                </div>
                <Link to="/spells">Spells</Link>
            </div>
        </section>
    )
}

export default PathfinderDatabaseSplashScreen;