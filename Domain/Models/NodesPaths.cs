namespace Turnkey_challenge.Domain.Models
{
    public class NodesPaths
    {
         public Dictionary<int, int>? Distances { get; set; }
         public Dictionary<int, string>? PreviousNode { get; set; }
    }
}