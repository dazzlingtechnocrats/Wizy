import React, {Component} from 'react'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  images,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import resp from 'rn-responsive-font'

function Item ({item}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{item.key}</Text>
      <Image
        source={{uri: item.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
    </View>
  )
}

class WelcomeActivity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false,
      data: [
        {
          key: 'You Have a ride arriving',
          image:require('../images/text_icon.png'),
          service: 'Texi',
        },
        {
          key: 'You Food is arriving',
          image: require('../images/food-delivery.png'),
          service: 'Food Delivery',
        },
        {
          key: 'You Have Booked Electrician',
          image: require('../images/electrician.png'),
          service: 'Electrician',
        },
        {
          key: 'You Have a ride arriving',
          image: require('../images/plumber.png'),
          service: 'Plumber',
        },
        {
          key: 'You Food is arriving',
          image: require('../images/Blind_Cleaning_icon.png'),
          service: 'Blind Cleaning',
        },
        {
          key: 'You Have Book Electrician',
          image: require('../images/auto_electrician.png'),
          service: 'Auto Electrician',
        },
        {
          key: 'You Food is arriving',
          image: require('../images/lawn-mower.png'),
          service: 'Lawn Mower',
        },
        {
          key: 'You Have a ride arriving',
          image: require('../images/bridal_works_icon.png'),
          service: 'Bridal Works',
        },
        {
          key: 'You Food is arriving',
          image: require('../images/event-planner.png'),
          service: 'Event Planner',
        },
        {
          key: 'You Have Booked Electrician',
          image: require('../images/Heat_pump_installers.png'),
          service: 'Heat pump installers',
        },
        {
          key: 'You Have a ride arriving',
          image: require('../images/Handyman.png'),
          service: 'Handyman',
        },
        {
          key: 'You Food is arriving',
          image: require('../images/pest-control.png'),
          service: 'Pest Control',
        },
        
      ],
    }
  }
  // hide show modal
  displayModal (show) {
    this.setState({isVisible: show})
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.container3}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Model')
              }}>
              <Image
                source={require('../images/menu.png')}
                style={styles.MenuHomeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.screentitle}>Welcome John</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container5}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.headerView1}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ServiceActivity')
                }}>
                <Text style={styles.ServiceTitle}>Service</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ServiceActivity')
                }}>
                <Text style={styles.ViewAll}>View all</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <FlatList
                enableEmptySections={true}
                data={this.state.data}
                keyExtractor={item=>{
                  return item.service
                }}
                renderItem={({item}) =>{
                  
                  return(
                   
                  <View style={styles.GridViewContainer}>
                  
                     <Image
                        style={styles.image}
                        source={item.image}
                      />
                    <Text style={styles.name1}>{item.service}</Text>
                  </View>
                 
                )}}
               
                numColumns={4}>
                  
                </FlatList>
                
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.headerView1}>
              <TouchableOpacity>
                <Text style={styles.ServiceTitle}>Upcoming Booking</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              style={styles.container}
              enableEmptySections={true}
              data={this.state.data}
              keyExtractor={item => {
                return item.key
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Image
                        style={styles.image}
                        source={require('../images/support.png')}
                      />
                      <View style={styles.info}>
                        <Text style={styles.name}>{item.key}</Text>

                        <View style={styles.row}></View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>

        <View style={styles.tabStyle}>
          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('Dashboard')
            }}>
            <Image
              source={require('../images/home_active.png')}
              style={styles.StyleHomeTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('OderFoodActivity')
            }}>
            <Image
              source={require('../images/food.png')}
              style={styles.StyleVideoTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('RidingActivity')
            }}>
            <Image
              source={require('../images/bus.png')}
              style={styles.styleNotificationTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('HistoryActivity')
            }}>
            <Image
              source={require('../images/history.png')}
              style={styles.StyleProfileTab}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },
  container1: {
    flex: 0.5,
    marginTop: 10,
    backgroundColor: 'yellow',
  },
  container2: {
    flex: 0.5,
    backgroundColor: 'pink',
  },
  container3: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'black',
  },
  container4: {
    flex: 0.6,
    backgroundColor: 'black',
  },
  container5: {
    flex: 0.2,
    backgroundColor: 'black',
  },
  text: {
    color: '#fff',
    fontSize: resp(24),
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: resp(24),
    color: '#00479e',
    textAlign: 'center',
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading_text: {
    fontSize: RFValue(10, 580),
    textAlign: 'center',
    color: '#FFC33B',
    fontWeight: 'bold',
  },
  listItem: {
    marginTop: 2,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  bottomactivetextstyle: {
    color: '#FB3954',
    fontSize: resp(8),
    marginTop: 5,
    textAlign: 'center',
  },
  item: {
    color: '#000',
    fontSize: resp(25),
    margin: 15,
    marginLeft: 30,
  },
  title: {
    color: '#000',
    fontSize: resp(25),
    margin: 15,
    marginLeft: 30,
  },
  bottominactivetextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginTop: 3,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  StyleHomeTab: {
    marginTop: 5,
    width: 30,
    height: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleVideoTab: {
    marginTop: 11,
    marginRight: 10,
    width: 42,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomvideotextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginRight: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  styleNotificationTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomnotificationtextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginLeft: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  StyleProfileTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 60,
    margin: 4,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  tabButtonStyle: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000',
  },
  headerView1: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#000',
  },
  screentitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: resp(25),
    textAlign: 'center',
  },
  ServiceTitle: {
    marginLeft: 10,
    color: 'white',
    fontSize: resp(25),
    textAlign: 'center',
  },
  CircleShapeView: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 50,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  image: {
    width: 50,
    height: 50,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: resp(20),
    color: '#333',
  },
  ViewAll: {
    marginTop: 10,
    marginLeft: resp(240),
    fontSize: resp(20),
    color: '#fff',
  },
  name1: {
    fontSize: resp(10),
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  },
  box: {
    marginTop: 10,
    margin: 16,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  box2: {
    marginTop: 10,
    margin: 16,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
  },
  plusiconstyle: {
    height: 30,
    width: 30,
    marginTop: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBottomView: {
    height: 50,
    width: 400,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textblacktextstyle: {
    fontSize: resp(15),
    color: '#1B273E',
    fontWeight: 'bold',
  },
  textpinktextstyle: {
    fontSize: resp(15),
    fontWeight: 'bold',
    color: '#FB3954',
    textAlign: 'right',
    marginRight: 10,
  },
  playiconstyle: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  MenuHomeIconStyle: {
    margin: 10,
    height: 50,
    width: 50,
  },
  MenuHomeUserIconStyle: {
    height: 30,
    width: 25,
    margin: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallcircleshapeview: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },

  smallcircletext: {
    shadowColor: '#ecf6fb',
    elevation: 20,
    margin: 15,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 40,
    margin: 2,
  },
  GridViewTextLayout: {
    fontSize: resp(20),
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },
})

export default WelcomeActivity
