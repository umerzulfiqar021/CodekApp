import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,useEffect,useRef } from 'react'

interface props{
    callback: () => void,
    delay: number | null,
}
const useCustom = ({callback,delay}: props) => {
    const callBack = useRef<() => void>();
    useEffect(()=>{
        callBack.current = callback
    },[callback])
    useEffect(()=>{
        if (delay !== null){
            const list = setInterval(() => {
                callBack.current()
            }, delay);
            return () => clearInterval(list)
        }

    },[delay])
}

export default useCustom

const styles = StyleSheet.create({})