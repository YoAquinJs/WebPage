using TMPro;
using UnityEngine;
using NaughtyAttributes;

public class Torques : MonoBehaviour
{
    [SerializeField] private float m;//mass
    [SerializeField] private float d;//distance
    [SerializeField] private float F;//force

    [SerializeField] private GameObject mass;
    [SerializeField] private GameObject rope;
    [SerializeField] private GameObject center;

    private float alpha;
    private float initialTime;

    private bool simulating = false;
    
    [Button()]
    public void TriggerSimulation()
    {
        rope.transform.localPosition = new Vector3(0, d/2f, 0);
        rope.transform.localScale = new Vector3(0.2f, d, 1);
        
        mass.transform.localPosition = new Vector3(0, d, 0);
        
        alpha = (F * d) / (m * d * d);
        initialTime = Time.time;
        simulating = true;
    }
    
    [Button()]
    public void StopSimulation() => simulating = false;
    
    public void SetMass(string value)
    {
        float.TryParse(value, out var v);
        m = v;
    }
    public void SetDistance(string value)
    {
        float.TryParse(value, out var v);
        d =  v > 12f ? 12f : v; 
    }
    public void SetForce(string value)
    {
        float.TryParse(value, out var v);
        F = v;
    }
    
    private void FixedUpdate()
    {
        if (simulating == false) return;
        var t = Time.time - initialTime;
        center.transform.Rotate(new Vector3(0, 0, (alpha/2f)*t*t));
    }
}
