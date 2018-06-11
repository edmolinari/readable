import React from 'react';
import * as BlogApi from '../BlogApi'
import {
  mockCategories,
  mockPosts,
  mockPost,
  mockComments,
  mockComment
} from './fixtures'

jest.mock('../BlogApi', () => {
  return {
    getCategories: jest.fn(() => Promise.resolve(mockCategories)),
    getCategoryPosts: jest.fn(() => Promise.resolve(mockPosts)),
    getPosts: jest.fn(() => Promise.resolve(mockPosts)),
    getPost: jest.fn(() => Promise.resolve(mockPost)),
    createPost: jest.fn(() => Promise.resolve(mockPost)),
    updatePost: jest.fn(() => Promise.resolve(mockPost)),
    deletePost: jest.fn(() => Promise.resolve(mockPost)),
    getPostComments: jest.fn(() => Promise.resolve(mockComments)),
    getComment: jest.fn(() => Promise.resolve(mockComment)),
    createComment: jest.fn(() => Promise.resolve(mockComment))
  }
})

describe('../BlogApi', () => {
  it('getCategories', async () => {
    expect(await BlogApi.getCategories()).toEqual(mockCategories)
  })

  it('getCategoryPosts', async () => {
    expect(await BlogApi.getCategoryPosts()).toEqual(mockPosts)
  })

  it('getPosts', async () => {
    expect(await BlogApi.getPosts()).toEqual(mockPosts)
  })

  it('createPost', async () => {
    expect(await BlogApi.createPost()).toEqual(mockPost)
  })

  it('updatePost', async () => {
    expect(await BlogApi.updatePost()).toEqual(mockPost)
  })

  it('deletePost', async () => {
    expect(await BlogApi.deletePost()).toEqual(mockPost)
  })

  it('getPostComments', async () => {
    expect(await BlogApi.getPostComments()).toEqual(mockComments)
  })

  it('getComment', async () => {
    expect(await BlogApi.getComment()).toEqual(mockComment)
  })

  it('updatePost', async () => {
    expect(await BlogApi.createComment()).toEqual(mockComment)
  })
})
