/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
<<<<<<< HEAD

=======
import Image from 'next/image';
import {IconTwitter} from '../Icon/IconTwitter';
import {IconThreads} from '../Icon/IconThreads';
import {IconBsky} from '../Icon/IconBsky';
import {IconGitHub} from '../Icon/IconGitHub';
>>>>>>> 8201e7e9203321bd1648c3ab0b76ef943c9ec3ad
import {ExternalLink} from '../ExternalLink';
import {H3} from './Heading';
import {IconGitHub} from '../Icon/IconGitHub';
import {IconLink} from 'components/Icon/IconLink';
import {IconThreads} from '../Icon/IconThreads';
import {IconTwitter} from '../Icon/IconTwitter';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  title: string;
  permalink: string;
  children: React.ReactNode;
  photo: string;
  twitter?: string;
  threads?: string;
  bsky?: string;
  github?: string;
  personal?: string;
}

// TODO: good alt text for images/links
export function TeamMember({
  name,
  title,
  permalink,
  children,
  photo,
  github,
  twitter,
  threads,
  bsky,
  personal,
}: TeamMemberProps) {
  if (name == null || title == null || permalink == null || children == null) {
    throw new Error(
      'Expected name, title, permalink, and children for ' + name ??
        title ??
        permalink ??
        'unknown'
    );
  }
  return (
    <div className="pb-6 sm:pb-10">
      <div className="flex flex-col sm:flex-row height-auto">
        <div
          className="hidden sm:block basis-2/5 rounded overflow-hidden relative"
          style={{width: 300, height: 250}}>
          <Image src={photo} layout="fill" objectFit="cover" alt={name} />
        </div>
        <div
          style={{minHeight: 300}}
          className="block w-full sm:hidden flex-grow basis-2/5 rounded overflow-hidden relative">
          <Image src={photo} layout="fill" objectFit="cover" alt={name} />
        </div>
        <div className="ps-0 sm:ps-6 basis-3/5 items-start">
          <H3 className="mb-1 sm:my-0" id={permalink}>
            {name}
          </H3>
          {title && <div>{title}</div>}
          {children}
          <div className="sm:flex sm:flex-row flex-wrap text-secondary dark:text-secondary-dark">
            {twitter && (
              <div className="me-4">
                <ExternalLink
<<<<<<< HEAD
                  aria-label="Réagissez sur Twitter"
=======
                  aria-label={`${name} on Twitter`}
>>>>>>> 8201e7e9203321bd1648c3ab0b76ef943c9ec3ad
                  href={`https://twitter.com/${twitter}`}
                  className="hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center">
                  <IconTwitter className="pe-1" />
                  {twitter}
                </ExternalLink>
              </div>
            )}
            {threads && (
              <div className="me-4">
                <ExternalLink
<<<<<<< HEAD
                  aria-label="Réagissez sur Threads"
=======
                  aria-label={`${name} on Threads`}
>>>>>>> 8201e7e9203321bd1648c3ab0b76ef943c9ec3ad
                  href={`https://threads.net/${threads}`}
                  className="hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center">
                  <IconThreads className="pe-1" />
                  {threads}
                </ExternalLink>
              </div>
            )}
            {bsky && (
              <div className="me-4">
                <ExternalLink
                  aria-label={`${name} on Bluesky`}
                  href={`https://bsky.app/profile/${bsky}`}
                  className="hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center">
                  <IconBsky className="pe-1" />
                  {bsky}
                </ExternalLink>
              </div>
            )}
            {github && (
              <div className="me-4">
                <ExternalLink
                  aria-label="Profil GitHub"
                  href={`https://github.com/${github}`}
                  className="hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center">
                  <IconGitHub className="pe-1" /> {github}
                </ExternalLink>
              </div>
            )}
            {personal && (
              <ExternalLink
                aria-label="Site personnel"
                href={`https://${personal}`}
                className="hover:text-primary hover:underline dark:text-primary-dark flex flex-row items-center">
                <IconLink className="pe-1" /> {personal}
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
