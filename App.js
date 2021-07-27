import React, { Component } from "react";
import "./App.css";
import Wrapper from "./Wrapper";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Wrapper
          link="https://jsonplaceholder.typicode.com/users"
          render={({ list, isLoading, error }) => (
            <div className="parent_table">
              <h2>Random Users</h2>
              {error ? <p>{error.message}</p> : null}
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                <>
                  <table id="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
