import React, { Component } from 'react';
import CommunityContainer from './CommunityContainer/CommunityContainer.jsx';
import CultureContainer from './CultureContainer/CultureContainer.jsx';
import NewCommunityPost from './NewCommunityPost/NewCommunityPost.jsx';
import NewCulturePost from './NewCulturePost/NewCulturePost.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx'
import './App.css'


export default class App extends Component {
	constructor(){
		super();

		this.state = {
			community: [],
			culture: [],

			login: {
	          username: '',
	          password: '',
			},

            newCulturePost: {
             symbol: '',
             value: '',
             custom: '',
             tradition: '',
             language: '',
            },

            newCommunityPost: {
             name: '',
             discription: '',
             location: '',
            }

		};
	}

    componentDidMount() {
      this.getAllCulturePost(),
      this.getAllCommunitiesPost()
    }

    getAllCulturePost() {
     fetch(`/api/cultures`, {

      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
     })
     .then(r => r.json())
     .then((data) => {
     	console.log(data);
     	this.setState({
        culture: data,
     	});
     })
     .catch(err => console.log(err))
    }

    getAllCommunitiesPost() {
    	fetch(`/api/communities`, {
    		headers: {
    			'Content-Type': 'application/json',
    		},
    		method: 'GET',
    	})
    	.then(r => r.json())
    	.then((data) => {
    		console.log(data);
          this.setState({
          	community: data,
          });
    	})
         .catch(err => console.log(err))
    }

	createCulturePost()  {
	 fetch(`/api/cultures`, {
	 	headers: {
	 		'Content-Type': 'application/json',
	 	},
	 method: 'POST',
	 body: JSON.stringify({
	 	symbol: this.state.newCulturePost.symbol,
	 	value: this.state.newCulturePost.value,
	  custom: this.state.newCulturePost.custom,
	  tradition: this.state.newCulturePost.tradition,
	  language: this.state.newCulturePost.language
	 }),
	})
	 .then(() => {
	 	this.setState({
	 	newCulturePost: {
	 		symbol: '',
	 		value: '',
	 		custom: '',
	 		tradition: '',
	 		language: '',
	 	},
	 });
	})
	 .catch(err => console.log(err))
	}

	createCommunityPost() {
      fetch(`/api/communities`, {
      	headers: {
      		'Content-Type': 'application/json',
      	},
      method: 'POST',
      body: JSON.stringify({
      name: this.state.newCommunityPost.name,
      discription: this.state.newCommunityPost.discription,
      location: this.state.newCommunityPost.location
      }),
     })
      .then(() => {
      	this.setState({
      	  newCommunityPost: {
             name: '',
             discription: '',
             location: '',
          },
       });
      })
      .catch(err => console.log(err));
	}

	updateCultureSymbol(event) {
      this.setState({
       newCulturePost: {
             symbol: event.target.value,
             value: this.state.newCulturePost.value,
             custom: this.state.newCulturePost.custom,
             tradition: this.state.newCulturePost.tradition,
             language: this.state.newCulturePost.language,
          },
      });
	}

   updateCultureValue(event) {
   	this.setState({
   		newCulturePost: {
   			symbol: this.state.newCulturePost.symbol,
            value:  event.target.value,
            custom: this.state.newCulturePost.custom,
            tradition: this.state.newCulturePost.tradition,
            language: this.state.newCulturePost.language,
   		},
   	});
   }

   updateCultureCustom(event)  {
   	 this.setState({
	   	 newCulturePost: {
	      symbol: this.state.newCulturePost.symbol,
	      value: this.state.newCulturePost.value,
	      custom: event.target.value,
	      tradition: this.state.newCulturePost.tradition,
	      language: this.state.newCulturePost.language,
	   	 },
   	 });
   }

   updateCultureTradition(event) {
    this.setState({
    	newCulturePost: {
    		symbol: this.state.newCulturePost.symbol,
    		value: this.state.newCulturePost.value,
    		custom: this.state.newCulturePost.custom,
    		tradition: event.target.value,
    		language: this.state.newCulturePost.language,
    	},
    });
   }

   updateCultureLanguage(event) {
   	this.setState({
   		newCulturePost: {
         symbol: this.state.newCulturePost.symbol,
         value: this.state.newCulturePost.value,
         custom: this.state.newCulturePost.custom,
         tradition: this.state.newCulturePost.tradition,
         language: event.target.value,
   		},
   	});
   }


updateCommunityName(event) {
	this.setState({
		newCommunityPost: {
			name: event.target.value,
			discription: this.state.newCommunityPost.discription,
			location: this.state.newCommunityPost.location,
		},
	});
}


updateCommunityDiscription(event) {
   this.setState({
   	newCommunityPost: {
      name: this.state.newCommunityPost.name,
      discription: event.target.value,
      location: this.state.newCommunityPost.location,
    },
   });
}

updateCommunityLocation(event) {
	this.setState({
		newCommunityPost: {
			name: this.state.newCommunityPost.name,
			discription: this.state.newCommunityPost.discription,
			location: event.target.value,
		},
	});
}
	render() {
		 return (
			<div className="container">
              <Header />

              {this.props.children && React.cloneElement(this.props.children, {

                community: this.state.community,
                culture: this.state.culture,


                symbol: this.state.newCulturePost.symbol,
                value: this.state.newCulturePost.value,
                custom: this.state.newCulturePost.custom,
                tradition: this.state.newCulturePost.tradition,
                language: this.state.newCulturePost.language,
                updateCultureSymbol: (event) => this.updateCultureSymbol(event),
                updateCultureValue: (event) => this.updateCultureValue(event),
                updateCultureCustom: (event) => this.updateCultureCustom(event),
                updateCultureTradition: (event) => this.updateCultureTradition(event),
                updateCultureLanguage: (event) => this.updateCultureLanguage(event),
                createCulturePost: ()=> this.createCulturePost(),

                name: this.state.newCommunityPost.name,
                discription: this.state.newCommunityPost.discription,
                location: this.state.newCommunityPost.location,
                updateCommunityName: (event) => this.updateCommunityName(event),
                updateCommunityDiscription: (event) => this.updateCommunityDiscription(event),
                updateCommunityLocation: (event) => this.updateCommunityLocation(event),
                createCommunityPost: ()=> this.createCommunityPost(),

              })}
              <Footer/>
			</div>
		);
  }
}
