namespace Turnkey_challenge.Domain.Models
{
    public class NodeData
    {
        public int Id { get; set; }
        public int Label { get; set; }
    }
    public class Nodes
    {
          public string? Group { get; set; }
          public NodeData? Data { get; set; }

    }
}