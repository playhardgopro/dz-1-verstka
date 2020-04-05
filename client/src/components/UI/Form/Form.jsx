// import React from 'react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNaming } from '@bem-react/classname'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveSettings, getSettings, postSettings ,isLoading} from '../../../store/actionCreators'


import { Input, Button } from '../../'
import './Form.scss'

const cn = withNaming({ n: '', e: '__', m: '_' })
const cnForm = cn('form')

const options = [
  {
    label: 'Github repository',
    placeholder: 'username/repo-name',
    id: 'repoName',
    isRequired: true,
    vertical: true,
  },
  {
    label: 'Build command',
    placeholder: 'npm run build',
    id: 'buildCommand',
    isRequired: true,
    vertical: true,
  },
  {
    label: 'Main branch',
    placeholder: 'master',
    id: 'mainBranch',
    isRequired: false,
    vertical: true,
  },
  {
    label: 'Synchronize every',
    placeholder: '10',
    id: 'period',
    isRequired: false,
    vertical: false,
    text: true,
    numberMask: true
  },
]


const FormControls = (ctx) => {
  const handleSave = () => {
    ctx.props.postSettings({...ctx.state}).then((resolve)=>{
      if (resolve.success) {
        ctx.props.saveSettings({...ctx.state})
        ctx.props.history.push('/history')
      } else {
        ctx.props.isLoading(false)
      }
    })
  }

  const handleCancel = () => {
    ctx.props.history.goBack()
  }

  return (
    <div className="form__controls">
      <Button className={{ size: 'm', view: 'action' }} onClick={handleSave} disabled={ctx.props.settings.isLoading}>Save</Button>
      <Button className={{ size: 'm', view: 'control' }} onClick={handleCancel} disabled={ctx.props.settings.isLoading}>Cancel</Button>
    </div>
  )
}

const Inputs = (ctx) => {
  return options.map((el) => (
    <div key={el.id} className={cnForm('item', { 'indent-t': 'xl' })}>
      <Input options={el} change={ctx.handleChange} />
    </div>
  ))
}

class Form extends Component {
  state = {...this.props.settings}
  
  handleChange = (id, val) => {
    this.setState({ [id]:val })
  }

    render() {
    return (
      <form className={cnForm()}>
        <div className={cnForm('title')}>
          <div className="form__header text text_type_h2 text_size_15-20">Settings</div>
          <div className="form__subheader text text_type_h3 text_size_13-18 text_view_ghost">
            Configure repository connection and synchronization settings.
          </div>
        </div>
        <div className={cnForm('items')}>{Inputs(this)}</div>
        {FormControls(this)}
      </form>
    )
  }
}


const mapDispatchToProps = {
  saveSettings, getSettings, postSettings, isLoading
}
function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
}
Form.defaultProps = {
  children: '',
  className: {},
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))