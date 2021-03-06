// import * as React from 'react'
import React, { useEffect } from 'react'
import { withNaming } from '@bem-react/classname'
import { connect, useSelector, ConnectedProps, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { saveSettings, postSettings, getBuildList, isLoading } from '../../../store/actionCreators'

import { Button, Input, Text } from '../../index'
import './Form.scss'

const cn = withNaming({ n: '', e: '__', m: '_' })
const cnForm = cn('form')
const cnInput = cn('input')
const textStyle = { size: '13-18', type: 'h2' }

type name = 'repoName' | 'buildCommand' | 'mainBranch' | 'period'

const mapDispatch = {
  postSettings,
  saveSettings,
  getBuildList,
  isLoading,
}
const connector = connect(null, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Form: React.FC<Props> = ({ postSettings, saveSettings, getBuildList, isLoading }) => {
  const defaultValues = useSelector((state: RootState) => state.settings)
  const history = useHistory()
  const isLoadingState = useSelector((state: RootState) => state.settings.isLoading)
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, setValue, reset } = useForm<BuildSettings>()
  const { locale } = window

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const handleSave = (settings: BuildSettings) => {
    postSettings(settings).then((resolve) => {
      if (resolve.success) {
        getBuildList(25)
        saveSettings(settings)
        history.push('/history')
      } else {
        dispatch(isLoading(false))
        console.error(resolve?.error)
      }
    })
  }

  const handleCancel = () => {
    history.go(-1)
  }

  const handleClear = (name: name) => {
    setValue(name, '')
  }

  const validators = {
    required: { value: true, message: 'Field is required' },
    pattern: { value: /^[1-9]\d*$/, message: 'Field must be number and not equal to 0' },
  }

  const getValidators = (rules: string[]) =>
    Object.fromEntries(Object.entries(validators).filter(([key]) => rules.includes(key)))

  return (
    <form className={cnForm()}>
      <div className={cnForm('title')}>
        <div className="form__header text text_type_h2 text_size_15-20">{locale.Settings.Form.header}</div>
        <div className="form__subheader text text_type_h3 text_size_13-18 text_view_ghost">
          {locale.Settings.Form.description}
        </div>
      </div>
      <div className={cnForm('items')}>
        <div className={cnForm('item', { 'indent-t': 'xl' })}>
          <div className={cnInput('group', { vertical: true })}>
            <label className={cnInput('label', { required: true })} htmlFor="repository">
              <Text className={textStyle}>{locale.Settings.Input.repoName.head}</Text>
            </label>
            <Input
              id="repoName"
              placeholder={locale.Settings.Input.repoName.placeholder}
              onClear={handleClear}
              inputRef={register(getValidators(['required']))}
              status={errors.repoName && 'invalid'}
              size="m"
              width="full"
              name="repoName"
              clearable
            />
            {errors.repoName && <Text className={{ ...textStyle, view: 'error' }}>{errors.repoName.message}</Text>}
          </div>
        </div>
        <div className={cnForm('item', { 'indent-t': 'xl' })}>
          <div className={cnInput('group', { vertical: true })}>
            <label className={cnInput('label', { required: true })} htmlFor="repository">
              <Text className={textStyle}>{locale.Settings.Input.buildCommand.head}</Text>
            </label>
            <Input
              id="buildCommand"
              placeholder={locale.Settings.Input.buildCommand.placeholder}
              onClear={handleClear}
              inputRef={register(getValidators(['required']))}
              status={errors.buildCommand && 'invalid'}
              size="m"
              width="full"
              name="buildCommand"
              clearable
            />
            {errors.buildCommand && (
              <Text className={{ ...textStyle, view: 'error' }}>{errors.buildCommand.message}</Text>
            )}
          </div>
        </div>
        <div className={cnForm('item', { 'indent-t': 'xl' })}>
          <div className={cnInput('group', { vertical: true })}>
            <label className={cnInput('label', { required: true })} htmlFor="repository">
              <Text className={textStyle}>{locale.Settings.Input.mainBranch.head}</Text>
            </label>
            <Input
              id="mainBranch"
              placeholder={locale.Settings.Input.mainBranch.placeholder}
              onClear={handleClear}
              inputRef={register(getValidators(['required']))}
              status={errors.mainBranch && 'invalid'}
              size="m"
              width="full"
              name="mainBranch"
              clearable
            />
            {errors.mainBranch && <Text className={{ ...textStyle, view: 'error' }}>{errors.mainBranch.message}</Text>}
          </div>
        </div>
        <div className={cnForm('item', { 'indent-t': 'xl' })}>
          <div className={cnInput('group', { vertical: false })}>
            <label className={cnInput('label', { required: false })} htmlFor="period">
              <Text className={textStyle}>{locale.Settings.Input.period.head.one}</Text>
            </label>
            <Input
              id="period"
              placeholder={locale.Settings.Input.period.placeholder}
              onClear={handleClear}
              inputRef={register(getValidators(['required', 'pattern']))}
              status={errors.period && 'invalid'}
              name="period"
              size="m"
              width={52}
              text= {locale.Settings.Input.period.metrics}
            />
          </div>
          {errors.period && <Text className={{ ...textStyle, view: 'error' }}>{errors.period.message}</Text>}
        </div>
      </div>
      <div className={cnForm('controls')}>
        <Button className={{ size: 'm', view: 'action' }} onClick={handleSubmit(handleSave)} disabled={isLoadingState}>
          {locale.Settings.Button.Save}
        </Button>
        <Button className={{ size: 'm', view: 'control' }} onClick={handleCancel} disabled={isLoadingState}>
          {locale.Settings.Button.Cancel}
        </Button>
      </div>
    </form>
  )
}

export default connector(Form)
