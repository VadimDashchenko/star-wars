import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as planetActions from '../../actions/planets';
import CardItem from '../../components/CardItem/CardItem';
import Buttons from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import './App.css';

const BASE_URL = 'https://swapi.dev/api/';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            next: null,
            prev: null,
            loading: true
        }
    }

    componentDidMount() {
        const {loadPlanets} = this.props;
        fetch(BASE_URL + 'planets')
            .then(res => res.json())
            .then(data => {
                let planets = data.results;
                let next = data.next;
                let prev = data.previous;
                this.setState({next, prev})
                loadPlanets(planets);
            })
            .then(() => this.setState({loading: false}))
    }

    clickPage = (e) => {
        const {loadPlanets} = this.props;
        const {next, prev} = this.state;
        let text = e.currentTarget.innerText;
        fetch(text === 'Next' ? next : prev)
            .then(res => res.json())
            .then(data => {
                let next = data.next;
                let prev = data.previous;
                loadPlanets(data.results);
                this.setState({
                    next,
                    prev
                })
            })
    }

    render() {
        const {planetsAll} = this.props;
        const {prev, loading} = this.state;
        return (
            <div className="App">
                {!loading ? <CardItem planets={planetsAll}/> : <Spinner/>}
                {prev === null ?
                    <Buttons click={this.clickPage} title="Next"/>
                    :
                    <>
                        <Buttons click={this.clickPage} title="Previous"/>
                        <Buttons click={this.clickPage} title="Next"/>
                    </>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    planetsAll: state.planet.planets
})

export default connect(
    mapStateToProps,
    planetActions
)(App);
