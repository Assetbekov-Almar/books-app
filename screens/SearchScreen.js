import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

import { Search, Wrapper } from '../components/styled';
import { ThemeContext } from '../config/theme';
import { images } from '../constants';

class SearchScreen extends React.Component {
  state = {
    text: '',
  };

  searchBooks = () => {
    if (this.state.text === '') {
      showMessage({
        message: 'Search query cannot be empty',
      });
      return;
    }

    this.props.navigation.navigate('Result', {
      searchQuery: this.state.text,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <Wrapper normal>
          <SafeAreaConsumer>
            {insets => (
              <ThemeContext.Consumer>
                {({ toggleTheme, theme }) => (
                  <TouchableOpacity
                    onPress={toggleTheme}
                    style={{
                      position: 'absolute',
                      top: insets.top + 10,
                      right: 25,
                      justifyContent: 'center',
                      zIndex: 1,
                    }}
                  >
                    <Ionicons
                      name={theme === 'light' ? 'ios-moon' : 'ios-sunny'}
                      size={32}
                      color={this.props.theme.colors.primary}
                    />
                  </TouchableOpacity>
                )}
              </ThemeContext.Consumer>
            )}
          </SafeAreaConsumer>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image style={{width: 180, height: 300}}source={images.quote}/>
            <Search
              onSearchChange={changedText =>
                this.setState({ text: changedText })
              }
              onBlur={this.searchBooks}
            />
          </View>
        </Wrapper>
      </KeyboardAvoidingView>
    );
  }
}

export default withTheme(SearchScreen);
