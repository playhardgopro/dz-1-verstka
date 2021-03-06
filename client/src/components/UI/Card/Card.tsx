import React, { useEffect } from 'react'
import { withNaming } from '@bem-react/classname'
import { useRouteMatch } from 'react-router-dom'
import { IconBox, Icon } from '../../index'
import './Card.scss'
import { useSelector } from 'react-redux'
import { getDuration, getDate } from '../../../helpers/time'

const cn = withNaming({ n: '', e: '__', m: '_' })

interface CardProps {
  options: BuildTask
  onClick?(event: React.MouseEvent, { buildNumber, buildId }: { buildNumber: number; buildId: string }): void
}
interface CardMeta {
  start?: string
  duration?: number
  formattedDuration: string
  formattedDate: string
  currentLocale: 'ru' | 'en'
  status: BuildStatus
}

const CardMeta: React.FC<CardMeta> = ({ formattedDuration, status, formattedDate }) => {
  return (
    <div className="card__meta card__meta_m-hr_top meta meta_distribute_vertical meta_m-distribute_horizontal text text_size_13-16 text_view_ghost">
      <div className="meta__item meta__item_indent-b_8">
        <div className="icon-box">
          <div className="icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4">
            <Icon name="calendar" />
          </div>
          <div className="">{formattedDate}</div>
        </div>
      </div>
      <div className="meta__item meta__item_indent-b_8">
        <div className="icon-box">
          <div className="icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4">
            <Icon name="clock" />
          </div>
          <div className="text text_size_13-16 text_view_ghost">{formattedDuration || status}</div>
        </div>
      </div>
    </div>
  )
}

const CardMeta2: React.FC<CardMeta> = ({ formattedDuration, status, formattedDate }) => {
  return (
    <div className="list__item meta meta_hr_top text text_size_13-16 text_view_ghost">
      <div className="meta__item meta__item_indent-b_8">
        <div className="icon-box">
          <div className="icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4">
            <Icon name="calendar" />
          </div>
          <div className="icon-box__content">{formattedDate}</div>
        </div>
      </div>
      <div className="meta__item meta__item_indent-b_8">
        <div className="icon-box">
          <div className="icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4">
            <Icon name="clock" />
          </div>
          <div className="text text_size_13-16 text_view_ghost">{formattedDuration || status}</div>
        </div>
      </div>
    </div>
  )
}

const Card: React.FC<CardProps> = ({ options, onClick }) => {
  const { id, buildNumber, commitMessage, commitHash, branchName, authorName, start, duration, status } = options
  const match = useRouteMatch()
  let viewStatus: 'success' | 'warning' | 'error' = 'error'
  let cardMetaUnder = true
  if (status === 'Success') viewStatus = 'success'
  if (status === 'Waiting' || status === 'InProgress') viewStatus = 'warning'
  if (status === 'Canceled' || status === 'Fail') viewStatus = 'error'

  switch (match.path) {
    case '/history':
      cardMetaUnder = false
      break
    default:
      cardMetaUnder = true
  }

  const cnCard = cn('card')
  const cnText = cn('text')
  const currentLocale = useSelector((state: RootState) => state.locale)

  const formattedDuration = getDuration(duration, currentLocale)
  const formattedDate = getDate(start, currentLocale)

  return (
    <div onClick={onClick && ((e) => onClick(e, { buildNumber, buildId: id }))} className="card">
      <div className={cnCard('token')}>
        <IconBox textStyle={{ view: viewStatus }}>
          <Icon name={viewStatus} />
        </IconBox>
      </div>
      <div className={cnCard('content')}>
        <div className={cnCard('history', ['list'])}>
          <div className={cnCard('status', ['list__item'])}>
            <div
              className={`${cnCard('number')} ${cnText({ size: '18-20', view: viewStatus })}`}
            >{`#${buildNumber}`}</div>
            <div className="card__message text text_size_15-20 text_view_truncate">{commitMessage}</div>
          </div>
          <div className="list__item meta meta_m-distribute_vertical">
            <div className="meta__item">
              <div className="icon-box">
                <span className="icon icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4 text text_view_ghost">
                  <Icon name="commit" />
                </span>
                <div className="icon-box__content text_size_13-16">
                  <span className="text">{branchName}</span>
                  <span className="text text_view_ghost">{commitHash.slice(0, 7)}</span>
                </div>
              </div>
            </div>
            <div className="meta__item meta__item_indent-b_8">
              <div className="icon-box">
                <div className="icon-box__icon icon-box__icon_size_m icon-box__icon_indent-r_4 text text_view_ghost">
                  <Icon name="user" className={{ view: 'ghost' }} />
                </div>
                <span className="text text_size_13-16">{authorName}</span>
              </div>
            </div>
          </div>
          {cardMetaUnder && CardMeta2({ formattedDuration, formattedDate, status, currentLocale })}
        </div>
        {!cardMetaUnder && CardMeta({ formattedDuration, formattedDate, status, currentLocale })}
      </div>
    </div>
  )
}

export default Card
