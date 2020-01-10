import React, { Component } from 'react'
import './global.less'
import Axios from 'axios'

export class App extends Component {
  state = {
    params: [],
    url: '',
    method: 'get',
    paramType: 'querystring',
    resp: '',
  }
  render() {
    const { params } = this.state
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>cors api tester</h1>
        <hr />
        <table style={{ margin: '0 auto' }}>
          <tbody>
            <tr>
              <td>url:</td>
              <td>
                <input style={{ width: 200 }} onChange={e => this.setState({ url: e.target.value })} value={this.state.url} type="text" />
              </td>
            </tr>
            <tr>
              <td>method:</td>
              <td>
                <select>
                  <option value="get">get</option>
                  <option value="post">post</option>
                  <option value="put">put</option>
                  <option value="delete">delete</option>
                  <option value="head">head</option>
                  <option value="patch">patch</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>paramType: </td>
              <td>
                <select>
                  <option value="querystring">querystring</option>
                  <option value="formdata">formdata</option>
                  <option value="body">body</option>
                </select>
              </td>
            </tr>
            {params.map((p, i) => {
              return (
                <tr key={p.key}>
                  <td>
                    <button
                      onClick={() => {
                        const newParams = [...params]
                        newParams.splice(i, 1)
                        this.setState({ params: newParams })
                      }}
                    >
                      x
                    </button>
                    <input
                      placeholder="name"
                      style={{ width: 80 }}
                      onChange={e => {
                        params[i] = { ...params[i] }
                        params[i].name = e.target.value
                        this.setState({ params: [...params] })
                      }}
                      value={p.name}
                    />
                    :
                  </td>
                  <td>
                    <input
                      placeholder="value"
                      style={{ width: 200 }}
                      onChange={e => {
                        params[i] = { ...params[i] }
                        params[i].value = e.target.value
                        this.setState({ params: [...params] })
                      }}
                      value={p.value}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <hr />
        <button
          style={{ width: '100%' }}
          onClick={() => {
            const newParams = [...params]
            newParams.push({ key: Math.random(), name: '', value: '' })
            this.setState({ params: newParams })
          }}
        >
          add param
        </button>
        <button
          onClick={() => {
            const data = {}
            params.map(p => {
              data[p.name] = p.value
            })
            Axios({
              url: this.state.url,
              method: this.state.method,
              data: data,
            }).then(resp => {
              this.setState({ resp })
            })
          }}
          style={{ width: '100%', marginTop: 10 }}
        >
          submit
        </button>
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>{JSON.stringify(this.state.resp.data, null, 4)}</pre>
        <footer style={{ textAlign: 'center', fontSize: 14, color: '#999999', marginTop: 40 }}>
          <a target="_block" href="https://github.com/jfiyar">
            github@jfiyar
          </a>
        </footer>
      </div>
    )
  }
}
