using Turnkey_challenge.Domain.Models;

namespace Turnkey_challenge.Domain.Interfaces
{
    public interface INodesPathsServices
    {
        Task<NodesPaths> GetNodesPaths(Graph graph);
    }
}