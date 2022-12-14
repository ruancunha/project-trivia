import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      hash: '',
    };
    this.md5Converter = this.md5Converter.bind(this);
  }

  componentDidMount() {
    this.md5Converter();
  }

  md5Converter() {
    const { email } = this.props;
    const hash = md5(email).toString();
    this.setState({
      hash,
    });
  }

  render() {
    const { hash } = this.state;
    const { name, score } = this.props;
    return (
      <div>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
        <header className="header">
          <div className="title-div">
            <NavLink to="/" activeStyle={ { textDecoration: 'none' } }>
              <h1 className="title-game" textDecoration="none">Black Cat Asks...</h1>
            </NavLink>
          </div>
          <div className="infos">
            <img className="image" src={ `https://www.gravatar.com/avatar/${hash}` } data-testid="header-profile-picture" alt={ name } />
            <p className="name" data-testid="header-player-name">{name}</p>
            <p data-testid="header-score">{ score }</p>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
