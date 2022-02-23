using TMPro;
using UnityEngine;
using NaughtyAttributes;
using Unity.Mathematics;
using System.Collections;

public class Physics : MonoBehaviour
{
    [SerializeField] private int cps;
    [SerializeField] private float gravity;
    [SerializeField] private float vo;
    [SerializeField] private float voDir;
    [SerializeField] private Vector2 xo;

    [SerializeField] private GameObject objPrefab;

    private float xPos, yPos;
    private float vox, voy;

    private float initialTime;
    
    private bool graphing;

    [Button()]
    public void TriggerSimulation()
    {
        initialTime = Time.time;
        
        vox = vo * Mathf.Cos(voDir * Mathf.PI / 180);
        voy = vo * Mathf.Sin(voDir * Mathf.PI / 180);
        xPos = xo.x;
        yPos = xo.y;
        
        for (var i = 0; i < transform.childCount; i++)
        {
            Destroy(transform.GetChild(i).gameObject);
        }
        
        graphing = true;
    }

    public void SetGravity(string value)
    {
        float.TryParse(value, out var v);
        gravity = v;
    }
    public void SetVo(string value)
    {
        float.TryParse(value, out var v);
        vo = v;
    }
    public void SetVoAngle(string value)
    {
        float.TryParse(value, out var v);
        voDir = v;
    }
    public void SetXox(string value)
    {
        float.TryParse(value, out var v);
        xo.x = v;
    }
    public void SetXoy(string value)
    {
        float.TryParse(value, out var v);
        xo.y = v;
    }
    
    private void Awake() => graphing = false;

    private void FixedUpdate()
    {
        if (yPos <= 0)
            graphing = false;

        if (graphing == false)
            return;

        yPos = -gravity / 2 * Mathf.Pow(Time.time - initialTime, 2) + voy * (Time.time - initialTime) +  xo.y;
        xPos = vox * (Time.time - initialTime) + xo.x;
        
        Instantiate(objPrefab, new Vector3(xPos, yPos, 0), quaternion.identity, transform);
        StartCoroutine(WaitTime(1/cps));
    }

    IEnumerator WaitTime(float time)
    {
        yield return new WaitForSeconds(time);
    }
}
