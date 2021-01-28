import React, { Component } from 'react';

export default class CreateUniversity extends Component {
    constructor(props) {
        super(props);

        this.onChangeUniversityname = this.onChangeUniversityname.bind(this);
        this.onChangeCricos = this.onChangeCricos.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeQsWorldRanking = this.onChangeQsWorldRanking.bind(this);
        this.onChangeQsNationalRanking = this.onChangeQsNationalRanking.bind(this);
        this.onChangeTuitionFee = this.onChangeTuitionFee.bind(this);
        this.onChangeIelts = this.onChangeIelts.bind(this);
        this.onChangeNumberOfStudents = this.onChangeNumberOfStudents.bind(this);
        this.onChangePercentageOfInternationalStudents = this.onChangePercentageOfInternationalStudents.bind(this);
        this.onChangeIntakes = this.onChangeIntakes.bind(this);
        this.onChangeFieldOfStudy1 = this.onChangeFieldOfStudy1.bind(this);
        this.onChangeFieldOfStudy2 = this.onChangeFieldOfStudy2.bind(this);
        this.onChangeFieldOfStudy3 = this.onChangeFieldOfStudy3.bind(this);
        this.onChangeFieldOfStudy4 = this.onChangeFieldOfStudy4.bind(this);
        this.onChangeFieldOfStudy5 = this.onChangeFieldOfStudy5.bind(this);
        this.onChangeFieldOfStudy6 = this.onChangeFieldOfStudy6.bind(this);

        this.state = {
            universityname: '',
            cricos: '',
            location: '',
            qsWorldRanking: '',
            qsNationalRanking: 0,
            tuitionFee: 0,
            ielts: 0,
            numberOfStudents: 0,
            percentageOfInternationalStudents: '',
            intakes: '',
            fieldOfStudy1: '',
            fieldOfStudy2: '',
            fieldOfStudy3: '',
            fieldOfStudy4: '',
            fieldOfStudy5: '',
            fieldOfStudy6: '',
            universities: []
            }
      }

    /*  componentDidMount() {
        this.setState({ 
          universities: ['test university'],
          universityname: 'test University'
        });
      }*/

      onChangeUniversityname(e) {
        this.setState({
          universityname: e.target.value
        });
      }
      
      onChangeCricos(e) {
        this.setState({
          cricos: e.target.value
        });
      }
      
      onChangeLocation(e) {
        this.setState({
          location: e.target.value
        });
      }
      
      onChangeQsWorldRanking(e) {
        this.setState({
          qsWorldRanking: e.target.value
        });
      }
      
      onChangeQsNationalRanking(e) {
        this.setState({
          qsNationalRanking: e.target.value
        });
      }
      
      onChangeTuitionFee(e) {
        this.setState({
          tuitionFee: e.target.value
        });
      }
      
      onChangeIelts(e) {
        this.setState({
          ielts: e.target.value
        });
      }
      
      onChangeNumberOfStudents(e) {
        this.setState({
          numberOfStudents: e.target.value
        });
      }
      
      onChangePercentageOfInternationalStudents(e) {
        this.setState({
          percentageOfInternationalStudents: e.target.value
        });
      }
      
      onChangeIntakes(e) {
        this.setState({
          intakes: e.target.value
        });
      }
      
      onChangeFieldOfStudy1(e) {
        this.setState({
          fieldOfStudy1: e.target.value
        });
      }
      
      onChangeFieldOfStudy2(e) {
        this.setState({
          fieldOfStudy2: e.target.value
        });
      }
      
      onChangeFieldOfStudy3(e) {
        this.setState({
          fieldOfStudy3: e.target.value
        });
      }
      
      onChangeFieldOfStudy4(e) {
        this.setState({
          fieldOfStudy4: e.target.value
        });
      }
      
      onChangeFieldOfStudy5(e) {
        this.setState({
          fieldOfStudy5: e.target.value
        });
      }
      
      onChangeFieldOfStudy6(e) {
        this.setState({
            fieldOfStudy6: e.target.value
        });
      }

      onSubmit(e) {
        e.preventDefault();

        const University = {
            universityname: this.state.universityname,
            cricos: this.state.cricos,
            location: this.state.location,
            qsWorldRanking: this.state.qsWorldRanking,
            qsNationalRanking: this.state.qsNationalRanking,
            tuitionFee: this.state.tuitionFee,
            ielts: this.state.ielts,
            numberOfStudents: this.state.numberOfStudents,
            percentageOfInternationalStudents: this.state.percentageOfInternationalStudents,
            intakes: this.state.intakes,
            fieldOfStudy1: this.state.fieldOfStudy1,
            fieldOfStudy2: this.state.fieldOfStudy2,
            fieldOfStudy3: this.state.fieldOfStudy3,
            fieldOfStudy4: this.state.fieldOfStudy4,
            fieldOfStudy5: this.state.fieldOfStudy5,
            fieldOfStudy6: this.state.fieldOfStudy6,
        };
      console.log(University);
      window.location = '/';
    }
      
    render() {
        return (
          <div>
            <h3>Create New University</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>University: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.universityname}
                    onChange={this.onChangeUniversityname}
                    />
              </div>
              <div className="form-group"> 
                <label>CRICOS: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.cricos}
                    onChange={this.onChangeCricos}
                    />
              </div>
              <div className="form-group">
                <label>Location: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    />
              </div>
              <div className="form-group">
                <label>QS World Ranking: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.qsWorldRanking}
                    onChange={this.onChangeQsWorldRanking}
                    />
              </div>
              <div className="form-group">
                <label>QS National Ranking: </label>
                <input 
                    type="number" 
                    className="form-control"
                    value={this.state.qsNationalRanking}
                    onChange={this.onChangeQsNationalRanking}
                    />
              </div>
              <div className="form-group">
                <label>Tuition Fee (AUD): </label>
                <input 
                    type="number" 
                    className="form-control"
                    value={this.state.tuitionFee}
                    onChange={this.onChangeTuitionFee}
                    />
              </div>
              <div className="form-group">
                <label>Minimum IELTS Score: </label>
                <input 
                    type="number" 
                    className="form-control"
                    value={this.state.ielts}
                    onChange={this.onChangeIelts}
                    />
              </div>
              <div className="form-group">
                <label>Number of Students: </label>
                <input 
                    type="number" 
                    className="form-control"
                    value={this.state.numberOfStudents}
                    onChange={this.onChangeNumberOfStudents}
                    />
              </div>
              <div className="form-group">
                <label>Percentage of International Students: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.percentageOfInternationalStudents}
                    onChange={this.onChangePercentageOfInternationalStudents}
                    />
              </div>
              <div className="form-group">
                <label>Intakes: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.intakes}
                    onChange={this.onChangeIntakes}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 1: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy1}
                    onChange={this.onChangeFieldOfStudy1}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 2: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy2}
                    onChange={this.onChangeFieldOfStudy2}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 3: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy3}
                    onChange={this.onChangeFieldOfStudy3}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 4: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy4}
                    onChange={this.onChangeFieldOfStudy4}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 5: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy5}
                    onChange={this.onChangeFieldOfStudy5}
                    />
              </div>
              <div className="form-group">
                <label>Field of Study 6: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.fieldOfStudy6}
                    onChange={this.onChangeFieldOfStudy6}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create University" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }
