import {BrowserRouter} from 'react-router-dom'
import {describe,it, expect} from 'vitest'
import React ,{Component} from 'react'

describe("BrowserRouter", ()=>{
    it("should return a class component", ()=>{
        const br = new BrowserRouter () 
        expect(br).toBeInstanceOf (Component)
    })
})