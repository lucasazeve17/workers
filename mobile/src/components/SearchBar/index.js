import React from 'react';
import { Searchbar } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import styles from '../../pages/Home/styles';

const SearchBar = ({onChangeSearch}) => {
    const [searchQuery, setSearchQuery] = React.useState('');  
  
    return (
      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
      />
    );
  };
  
  export default SearchBar;