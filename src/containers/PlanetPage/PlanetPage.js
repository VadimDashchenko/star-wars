import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailPlanet from "../../components/DetailPlanet/DetailPlanet";
import Spinner from '../../components/Spinner/Spinner';
import Buttons from '../../components/Button/Button';
import {Redirect, Link} from 'react-router-dom';

const BASE_URL = 'https://swapi.dev/api/';

class PlanetPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect:false
        }
    }

    render() {
        const {planet, residents} = this.props;
        return (
            <div className="planet-page">
                {planet !== null
                    ?
                    <>
                        <Link to="/">
                            <Buttons title="Back" />
                        </Link>
                        <DetailPlanet residents={residents} planet={planet}/>
                    </>
                    :
                    <Spinner/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    planet: state.planet.viewablePlanet,
    residents: state.planet.residents
})

export default connect(
    mapStateToProps,
    null
)(PlanetPage);