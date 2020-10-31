import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as planetActions from '../../actions/planets';
import CardItem from '../../components/CardItem/CardItem';
import Buttons from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import './App.scss';

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {resetViewablePlanet, viewablePlanet} = this.props;
        let path = window.location.pathname;
        if(path === '/' && viewablePlanet !== null){
            resetViewablePlanet()
        }
    }

    prevNextPage = (e) => {
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

    getViewablePlanet = async (item) => {
        const {getViewablePlanet} = this.props;
        let residents = [];
        await Promise.allSettled(item.residents.map(url => fetch(url)
            .then(res => res.json())
            .then(data => {
                residents.push(data);
                // console.log('BIG DATA', data)
            })
        ))
        getViewablePlanet(item, residents);
    }

    render() {
        const {planetsAll} = this.props;
        const {prev, loading, next} = this.state;
        return (
            <div className="app">
                {!loading ?
                    <section className="app__container">
                        <div className="app__items">
                            <CardItem getPlanet={this.getViewablePlanet} planets={planetsAll}/>
                        </div>
                        <div className="app__buttons">
                            {prev !== null && <Buttons click={this.prevNextPage} title="Previous"/>}
                            {next !== null && <Buttons click={this.prevNextPage} title="Next"/>}
                        </div>
                    </section>
                    : <Spinner/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    planetsAll: state.planet.planets,
    viewablePlanet: state.planet.viewablePlanet
})

export default connect(
    mapStateToProps,
    planetActions
)(App);
