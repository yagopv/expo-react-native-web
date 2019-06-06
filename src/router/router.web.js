import React from 'react';
import { View } from 'react-native-web';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Details from '../features/details/Details';
import Home from '../features/home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <View>
        <Link to="/home">Home</Link>
        <Link to="/details">Details</Link>

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/details" component={Details} />
      </View>
    </BrowserRouter>
  );
}
