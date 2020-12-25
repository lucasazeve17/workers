import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Text } from 'react-native-paper';
import styles from './styles';


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = ({
    title,
    paragraph,
    cover
}) => (
  <Card style={styles.card}>
        <Card.Cover style={styles.cover} source={{ uri: cover }} />
        <View style={{flexDirection:'row'}}>
        <Card.Title  style={styles.title} title={title}  />
        <Paragraph style={styles.describe} >{paragraph}</Paragraph>

        </View>
    {/* <Card.Content  style={styles.content}> */}
    
    {/* <Card.Actions style={styles.btnGroup}>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
    {/* </Card.Content> */}
  </Card>
);

export default MyCard;