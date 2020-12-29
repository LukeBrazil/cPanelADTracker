import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Button } from 'react-bulma-components'

export class LandingPage extends Component {
  render() {
      const dashboardLink = () => {

      }
    return (
      <div>
        <Section class="hero is-medium is-primary is-bold">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">CPanel Associate Developer Tracker</h1>
              <Button class="button is-primary">Go</Button>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default LandingPage;
